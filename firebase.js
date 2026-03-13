import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "aqtivaai.firebaseapp.com",
  projectId: "aqtivaai",
  storageBucket: "aqtivaai.firebasestorage.app",
  messagingSenderId: "10054337154",
  appId: "1:10054337154:web:fdb32f6b7f3298b7b16a9b"
};

const app = initializeApp(firebaseConfig);

export default app;
