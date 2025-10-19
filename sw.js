// sw.js
import { cardSetsConfig } from '/data/sets.js';
// 在 SW 顶层声明一个变量来存储待办信息

let dailyTodoMessage = '今天有新的学习任务在等你，点击开始复习。';
// 导入卡片组配置，以便缓存所有数据文件
// 如果这行代码在您的环境中引发错误（例如在某些旧的服务器或构建工具中），
// 您可以手动将数据文件路径添加到 ASSETS_TO_CACHE 数组中。

const DATA_FILES_TO_CACHE = Object.values(cardSetsConfig).map(config => config.path);
const CACHE_NAME = 'flashcards-cache-v7'; // 每次重大更改时，请升级版本号

// 动态生成需要缓存的资源列表

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.json',
  '/data/sets.js', // 缓存配置文件
  '/js/main.js', // 把所有 JS 模块也加入缓存！
  '/js/ui.js',
  '/js/state.js',
  '/js/pwa.js',
  '/js/editor.js',
  ...DATA_FILES_TO_CACHE // 缓存所有数据文件
];

/* ---------------- 生命周期事件：安装、激活 ---------------- */

self.addEventListener('install', event => {
  const data = event.data;
  if (data && data.action === 'send-notification') {
    event.waitUntil(sendNotification(data.payload));
  } else if (data && data.action === 'set-daily-todo') {
    // 收到主页面发来的待办信息，存储起来
    dailyTodoMessage = data.payload.message;
    console.log('SW: 已更新每日待办事项:', dailyTodoMessage);
  }
});

self.addEventListener('activate', event => {
  console.log('SW: 激活中...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() =>{
        return self.clients.claim().then(() => {
        // 向所有受控制的客户端广播“我已就绪”的消息
            self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                console.log('SW: 主动向客户端索要最新数据');
                client.postMessage({ action: 'sw-ready-request-todo' });
          });
        });
      });
    })
  );
});

/* ---------------- 功能性事件：抓取、消息、同步、通知点击 ---------------- */

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});

self.addEventListener('periodicsync', event => {
  if (event.tag === 'daily-reminder') {
    const reminderPayload = {
      title: '📚 该复习你的抽认卡啦！',
      body: dailyTodoMessage, // <-- 关键！确保这里用的是 dailyTodoMessage
      tag: `reminder-${new Date().getHours()}`
    };
    event.waitUntil(sendNotification(reminderPayload));
  }
});
async function sendNotification(notificationData) {
  const { title, body, tag } = notificationData;
  console.log(`SW: 准备发送通知 (Tag: ${tag})`);
  await self.registration.showNotification(title, {
    body: body,
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    tag: tag
  });
}

self.addEventListener('message', event => {
  const data = event.data;
  if (data && data.action === 'send-notification') {
    event.waitUntil(sendNotification(data.payload));
  } else if (data && data.action === 'set-daily-todo') {
    dailyTodoMessage = data.payload.message;
    console.log('SW: 已成功更新每日待办事项:', dailyTodoMessage);
  }
});


self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      if (clientList.length > 0) return clientList[0].focus();
      return clients.openWindow('/');
    })
  );
});