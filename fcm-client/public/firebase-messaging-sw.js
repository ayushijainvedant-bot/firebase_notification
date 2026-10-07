// public/firebase-messaging-sw.js

self.importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js",
);

self.importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js",
);

const firebaseConfig = {
  apiKey: "AIzaSyBv1p7nZX1X5s-B8aPc4c9gf8KtKKenFrQ",
  authDomain: "fcm-learning-60397.firebaseapp.com",
  projectId: "fcm-learning-60397",
  storageBucket: "fcm-learning-60397.firebasestorage.app",
  messagingSenderId: "601250156565",
  appId: "1:601250156565:web:ffd4a68a8e2be2bb947e1c",
};

self.firebase.initializeApp(firebaseConfig);

const messaging = self.firebase.messaging();
