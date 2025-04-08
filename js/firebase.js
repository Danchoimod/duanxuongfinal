// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKWlVt-6jxRGh9kH7JFh_W15aiXfxhuVg",
  authDomain: "duanxuong-c6a61.firebaseapp.com",
  projectId: "duanxuong-c6a61",
  storageBucket: "duanxuong-c6a61.firebasestorage.app",
  messagingSenderId: "239024130672",
  appId: "1:239024130672:web:e1ecb698d32dbf6f0dc2b5",
  measurementId: "G-8Z8YS2L6GB",
  databaseURL: "https://duanxuong-c6a61-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const postRef = ref(database, "posts");

const postList = document.getElementById("postList");

onValue(postRef, (snapshot) => {
  const data = snapshot.val();
  postList.innerHTML = "";

  for (let key in data) {
    const post = data[key];
    const div = document.createElement("div");
    div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><hr>`;
    postList.appendChild(div);
  }
});
