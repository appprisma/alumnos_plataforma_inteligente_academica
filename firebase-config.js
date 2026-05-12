// firebase-config.js
// ⚠️ REEMPLAZA estos valores con los de tu proyecto Firebase
// Encuéntralos en: Firebase Console → Project Settings → Your apps → SDK setup

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDywa2TRCcsPbogmMpvO-awQM3GyD_tpSY",
  authDomain: "calif-sec-montes-07-05-2026.firebaseapp.com",
  databaseURL: "https://calif-sec-montes-07-05-2026-default-rtdb.firebaseio.com",
  projectId: "calif-sec-montes-07-05-2026",
  storageBucket: "calif-sec-montes-07-05-2026.firebasestorage.app",
  messagingSenderId: "742610869102",
  appId: "1:742610869102:web:ba61e56c3e3feb641a7f7f"
};
export { FIREBASE_CONFIG };

// Reglas de seguridad recomendadas para Firebase Realtime Database:
// (pégalas en Firebase Console → Realtime Database → Rules)
//
// {
//   "rules": {
//     ".read": true,    // Lectura pública (solo matrícula, sin datos sensibles extra)
//     ".write": false   // Escritura solo via Apps Script con el secret
//   }
// }
