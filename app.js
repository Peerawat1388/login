import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , onAuthStateChanged , signOut , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
const firebaseConfig = {
    apiKey: "AIzaSyBKPCaeP5nbbbMgC9vFyHYKHRQkLkeAla0",
    authDomain: "basic-firebase-web-780f9.firebaseapp.com",
    projectId: "basic-firebase-web-780f9",
    storageBucket: "basic-firebase-web-780f9.appspot.com",
    messagingSenderId: "1080103150021",
    appId: "1:1080103150021:web:8f0dae7d4d2b9dfde86bac",
    measurementId: "G-74S6QSH4F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const form = document.getElementById("registerForm")
const formarea = document.getElementById("form-area")
const profile = document.getElementById("profile")
const welcome = document.getElementById("welcome")
const logout = document.getElementById("logout")
const loginForm = document.getElementById("loginForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = form.email.value
    const password = form.password.value
    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        alert("สร้างบัญชีผู้ใช้เรียบร้อย")
    }).catch((error)=>{
        alert(error.massage)
    })
})

onAuthStateChanged(auth,(user)=>{
    //login
    if(user){
        profile.style.display="block"
        formarea.style.display="none"
        welcome.innerText=`ยินดีต้อนรับ ${user.email}`
    }else{
        profile.style.display="none"
        formarea.style.display="block"
    }
})

logout.addEventListener("click",(e)=>{
    signOut(auth).then(()=>{
        alert("ออกจากระบบเรียบร้อย")
    }).catch((error)=>{
        alert(error.message)
    })
})

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value
    signInWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        alert("ลงทะเบียนเรียบร้อย")
    }).catch((error)=>{
        alert(error.massage)
    })
})