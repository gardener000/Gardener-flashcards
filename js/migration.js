// js/migration.js
import { db } from './firebase.js';
// 假设您的 cardSetsConfig 在 data/sets.js
import { cardSetsConfig } from '../data/sets.js'; 

function isMigrationCompleted() { return localStorage.getItem('firebase_migration_completed_v1') === 'true'; }
function markMigrationAsCompleted() {  localStorage.setItem('firebase_migration_completed_v1', 'true'); }
export async function migrateLocalDataToFirestore(userId) {  if (isMigrationCompleted()) {
    console.log("数据迁移已完成，跳过。");
    return;
  }

  console.log("检测到首次登录，开始迁移本地数据到 Firestore...");

  // 使用 Firestore 的批量写入 (batch) 来提高效率和原子性
  const batch = db.batch();

  // 遍历所有卡片组配置
  for (const setId in cardSetsConfig) {
    // 1. 迁移卡片内容
    const cardsKey = `flash_cards_${setId}_v2`;
    const localCards = JSON.parse(localStorage.getItem(cardsKey) || 'null');
    if (localCards && localCards.length > 0) {
      // 在 Firestore 中为这个卡片组创建一个文档
      const setDocRef = db.collection('users').doc(userId).collection('cardSets').doc(setId);
      batch.set(setDocRef, { name: cardSetsConfig[setId].name, cards: localCards });
      console.log(`准备迁移卡片组: ${setId} (${localCards.length} 张)`);
    }

    // 2. 迁移学习进度
    const leitnerKey = `flash_leitner_${setId}_v2`;
    const statsKey = `flash_stats_${setId}_v2`;
    const localLeitner = JSON.parse(localStorage.getItem(leitnerKey) || 'null');
    const localStats = JSON.parse(localStorage.getItem(statsKey) || 'null');
    if (localLeitner || localStats) {
      const progressDocRef = db.collection('users').doc(userId).collection('progress').doc(setId);
      batch.set(progressDocRef, { leitner: localLeitner || {}, stats: localStats || {} });
      console.log(`准备迁移进度: ${setId}`);
    }
  }

  try {
    // 提交所有写入操作
    await batch.commit();
    markMigrationAsCompleted();
    console.log("数据迁移成功！");
    alert("您的本地数据已成功同步到云端！");
  } catch (error) {
    console.error("数据迁移失败:", error);
    alert("数据迁移失败，请检查控制台。");
  }
}