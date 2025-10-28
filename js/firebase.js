// js/firebase.js

// 1. 粘贴您从 Firebase 控制台复制的配置信息
const firebaseConfig = {
	apiKey: "AIzaSyDCVDFxXuwD2Wa64bxKD-326wdytJGoIao",  
	authDomain: "my-flashcards-app-56272.firebaseapp.com",  
	projectId: "my-flashcards-app-56272",  
	storageBucket: "my-flashcards-app-56272.firebasestorage.app",  
	messagingSenderId: "203850684359",  
	appId: "1:203850684359:web:affd832d1327483b402be2"
};
firebase.initializeApp(firebaseConfig);

// 2. 导出服务实例
export const auth = firebase.auth();
export const db = firebase.firestore();

// 3. 登录/登出/状态监听函数
export function onAuthStateChanged(callback) { auth.onAuthStateChanged(callback); }
export async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try { await auth.signInWithPopup(provider); } catch (error) { console.error("Google 登录失败:", error); alert("登录失败，请查看控制台。"); }
}
export function signOut() { auth.signOut(); }