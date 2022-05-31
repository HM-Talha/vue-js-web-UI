import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


import App from './App.vue'
import router from './router'
const firebaseConfig = {
    apiKey: "AIzaSyCPJiqHviR7WVr3TTfhLcGb7RjDGC6qNDU",
    authDomain: "to-do-app-f7313.firebaseapp.com",
    projectId: "to-do-app-f7313",
    storageBucket: "to-do-app-f7313.appspot.com",
    messagingSenderId: "531433038700",
    appId: "1:531433038700:web:d7843430a5dc9f89400949",
    measurementId: "G-T9LTL8750S"
};


const fire = initializeApp(firebaseConfig);
 const auth = getAuth(fire);
 export const db = getFirestore(fire);

const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
