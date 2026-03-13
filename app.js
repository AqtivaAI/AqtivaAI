import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// إعدادات Firebase التي قدمتها
const firebaseConfig = {
    apiKey: "AIzaSyCIx-OF2SiJN78i2Aar8R7aOt-hamri3Lw",
    authDomain: "aqtivaai.firebaseapp.com",
    projectId: "aqtivaai",
    storageBucket: "aqtivaai.firebasestorage.app",
    messagingSenderId: "10054337154",
    appId: "1:10054337154:web:fdb32f6b7f3298b7b16a9b"
};

// تشغيل النظام
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// دالة التنفيذ المنطقية
async function handleExecution() {
    const text = userInput.value.trim();
    if (!text) return;

    // عرض رسالة المستخدم
    chatBox.innerHTML += `<div style="color:var(--secondary); margin-top:10px;">> ${text}</div>`;
    userInput.value = "";

    try {
        // محاكاة استجابة AI (يمكن ربط API هنا لاحقاً)
        const aiResponse = "تمت المعالجة وحفظ البيانات في قاعدة بيانات Aqtiva.";
        
        // حفظ العملية في Firebase Firestore
        await addDoc(collection(db, "conversations"), {
            prompt: text,
            response: aiResponse,
            time: serverTimestamp()
        });

        // عرض استجابة النظام
        setTimeout(() => {
            chatBox.innerHTML += `<div style="color:var(--accent)">[SYSTEM]: ${aiResponse}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 500);

    } catch (error) {
        console.error("خطأ تقني:", error);
    }
}

// تشغيل الأزرار
sendBtn.addEventListener('click', handleExecution);
userInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleExecution(); });
