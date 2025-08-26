<script type="module">
// Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { 
  getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc 
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase konfiguratsiya
const firebaseConfig = {
  apiKey: "AIzaSyCBjuHO-fhw6naOd6GdaC5M3UX4AaZTHDE",
  authDomain: "faravonlik-maktabi.firebaseapp.com",
  projectId: "faravonlik-maktabi",
  storageBucket: "faravonlik-maktabi.firebasestorage.app",
  messagingSenderId: "214290423507",
  appId: "1:214290423507:web:8970831cf3142085d8fe26",
  measurementId: "G-YJME3FY39J"
};

// Firebase’ni ishga tushirish
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Yangi o‘quvchi qo‘shish
export async function addStudent(name, grade, attendance) {
  await addDoc(collection(db, "students"), {
    name: name,
    grade: grade,
    attendance: attendance
  });
}

// 🔹 Barcha o‘quvchilarni olish
export async function getStudents() {
  const querySnapshot = await getDocs(collection(db, "students"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// 🔹 O‘quvchini yangilash
export async function updateStudent(id, data) {
  const studentRef = doc(db, "students", id);
  await updateDoc(studentRef, data);
}

// 🔹 O‘quvchini o‘chirish
export async function deleteStudent(id) {
  const studentRef = doc(db, "students", id);
  await deleteDoc(studentRef);
}
</script>
