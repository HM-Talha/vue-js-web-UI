<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <div class="sideBar">
      <div>
        <section class="taskBox">
          <div><img src="../assets/task.png" alt="" /></div>
          <div><p>Task</p></div>
        </section>
        <section class="locationBox" @click="redirect">
          <div><img src="../assets/location1.png" alt="" /></div>
          <div><p>Location</p></div>
        </section>
        <section class="logout" @click="logout">
          <section class="logoutBox">
            <div><img src="../assets/logout.png" alt="" /></div>
            <div><p>Logout</p></div>
          </section>
        </section>
      </div>
    </div>
    <!-- SideBar -->
    <div class="addBox">
      <div class="taskbox">
        <section class="addTask" @click="this.modal = !this.modal">
          <button class="trigger">+</button>
          <p>Add New Task</p>
        </section>

        <section class="complete"><p>Incomplete</p></section>
        <span v-for="task in docs" :key="task.taskId">
          <section class="dailyTask">
            <div>
              <input type="checkbox" @click="changeStatus(task)" />
            </div>
            <div>
              <p>
                {{ task.summary }} <br />
                <span
                  ><img src="../assets/watch.png" alt="" /> Today,
                  {{ task.time }}</span
                >
              </p>
            </div>
          </section>
          <br /><br />
        </span>
        <br />

        <section class="incomplete"><p>Completed</p></section>
        <span v-for="comp in completed" :key="comp.id">
          <section class="answerBox">
            <input type="checkbox" name="" id="" />
            <p>{{ comp.summary }}</p>
          </section>
        </span>
      </div>

      <!-- Modal -->
      <div class="modal" v-if="modal">
        <div class="modal-content">
          <span class="close-button">&times;</span>
          <div>
            <p>New Task</p>
          </div>
          <div class="modalInpBox">
            <section class="modalInpBox">
              <input v-model="summary" type="text" placeholder="Summary" />
              <img class="inpImg" src="../assets/summary.png" alt="" />
            </section>
            <section class="modalInpBox">
              <input
                v-model="description"
                type="text"
                placeholder="Description"
              />
              <img class="inpImg" src="../assets/description.png" alt="" />
            </section>
            <section class="modalInpBox">
              <input type="date" v-model="dueDate" placeholder="Due Date" />
              <img class="inpImg" src="../assets/dueDate.png" alt="" />
            </section>
          </div>

          <section class="btnBox">
            <button
              class="cancelBtn"
              id="modal"
              @click="this.modal = !this.modal"
            >
              Cancel
            </button>
            <button @click="handleSave" class="saveBtn">Save</button>
          </section>
        </div>
      </div>
      <!-- Modal -->
    </div>
  </main>
</template>
<script>
import { collection, addDoc } from "firebase/firestore";
import { uuid } from "vue-uuid"; // uuid object is also exported to things
import { db } from "../main";
import { updateDoc, doc, getDocs, query, where } from "firebase/firestore";
import router from "../router/index";

export default {
  data() {
    return {
      summary: "",
      description: "",
      dueDate: "",
      docs: [],
      completed: [],
      modal: false,
    };
  },
  async mounted() {
    const q = await query(
      collection(db, "Tasks"),
      where("userId", "==", localStorage.getItem("uid")),
      where("status", "==", "assign")
    );
    const querySnapshot = await getDocs(q);
    let temp = [];
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      temp.push({ id: doc.id, ...doc.data() });
    });
    this.docs = temp;
    this.getCompleted();
  },
  methods: {
    async handleSave() {
      let taskId = uuid.v4();
      taskId = taskId.replace(/-/g, "_");

      const data = {
        summary: this.summary,
        description: this.description,
        date: this.dueDate,
        time: this.dueDate,
        userId: localStorage.getItem("uid"),
        status: "assign",
        taskId,
      };
      try {
        const docRef = await addDoc(collection(db, "Tasks"), data);
        console.log("Document written with ID: ", docRef.id);
        const q = await query(
          collection(db, "Tasks"),
          where("userId", "==", localStorage.getItem("uid")),
          where("status", "==", "assign")
        );
        const querySnapshot = await getDocs(q);
        let temp = [];
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          temp.push({ id: doc.id, ...doc.data() });
        });
        this.modal = false;
        this.getCompleted();
        this.docs = temp;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async redirect() {
      console.log("loca");
      router.push({ path: "/location" });
    },
    async changeStatus(d) {
      let id = d.id;
      const task = doc(db, "Tasks", id);
      await updateDoc(task, {
        status: "completed",
      });
      const q = await query(
        collection(db, "Tasks"),
        where("userId", "==", localStorage.getItem("uid")),
        where("status", "==", "assign")
      );
      const querySnapshot = await getDocs(q);
      let temp = [];
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        temp.push({ id: doc.id, ...doc.data() });
      });
      this.docs = temp;
      this.getCompleted();
    },
    async getCompleted() {
      const q = await query(
        collection(db, "Tasks"),
        where("userId", "==", localStorage.getItem("uid")),
        where("status", "==", "completed")
      );
      const querySnapshot = await getDocs(q);
      let temp = [];
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        temp.push({ id: doc.id, ...doc.data() });
      });
      this.completed = temp;
    },
    logout() {
      router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.sideBar {
  padding-top: 30px;
  width: 20%;
  height: 100vh;
  position: fixed;
  left: 0;
  /* border: 1px solid; */
}
.taskBox {
  display: flex;
  align-items: center;
  border: 1px solid;
  background-color: black;
  color: white;
  border-radius: 0 100px 100px 0;
  padding: 10px;
  padding-left: 10px;
}
.taskBox img {
  margin: 0 15px;
}
.locationBox {
  margin: 20px 0;
  display: flex;
  align-items: center;
  border-radius: 0 100px 100px 0;
  padding: 10px;
  padding-left: 0px;
}
.locationBox img {
  padding-left: 10px;
  margin: 0 15px;
}
.logout {
  height: 68vh;
  display: flex;
  align-items: flex-end;
  /* margin-bottom: 30px; */
}

.logoutBox {
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.logoutBox img {
  margin: 0 10px;
}

.addBox {
  /* width: 100%; */

  margin-left: 20%;
  /* border: 1px solid; */
  padding: 40px 0 10px 30px;
}
.addTask {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.addTask button {
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
}
.addTask p {
  margin: 0 5px;
  font-weight: bolder;
  color: #575767;
}
.complete {
  /* border: 1px solid; */
  margin-bottom: 10px;
  /* margin: 25px 0 15px; */
  font-weight: bolder;
  color: #575767;
}
.incomplete {
  /* border: 1px solid; */
  margin-top: 0px;
  /* margin: 25px 0 15px; */
  font-weight: bolder;
  color: #575767;
}
.dailyTask {
  /* border: 1px solid; */
  margin-bottom: -20px;
  align-items: flex-start;
  display: flex;
  width: 50%;
}
.dailyTask input {
  /* padding: 30px; */
  width: 30px;
  margin-right: 5px;
}
.dailyTask p {
  /* border: 1px solid red; */
  position: relative;
  text-align: start;
  font-weight: 500;
  font-size: 18px;
  color: #575767;
}
.dailyTask p span {
  /* border: 1px solid; */
  display: inline;
  position: relative;
  top: -10px;
  /* text-align: center; */
  color: #b9b9be;
  font-weight: bolder;
  font-size: 10px;
}
.dailyTask p span img {
  /* border: 1px solid; */
  position: relative;
  width: 20px;
  bottom: -6px;
}
.answerBox {
  display: flex;
  align-items: baseline;
  color: #b9b9be;

  margin-bottom: 10px;
  font-size: 18px;
}
.answerBox input {
  margin-right: 10px;
  border-color: #b9b9be;
}
.answerBox p {
  margin-top: 10px;
}
@media only screen and (max-width: 800px) {
  .sideBar {
    width: 50px;
  }
  .taskBox div p,
  .locationBox div p,
  .logoutBox div p {
    display: none;
  }
  .taskBox img,
  .locationBox img,
  .logoutBox img {
    margin: 0;
  }
}
.modal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.modal-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem 2.5rem;
  border-radius: 0.5rem;
  /* border: 1px solid;/ */
  width: 50%;
  height: 400px;
}
.modalInpBox {
  /* border: 1px solid; */
  margin-top: 40px;
}
.modalInpBox section {
  /* border: 1px solid yellow; */
  margin: 20px 0;
}
.modalInpBox section input {
  padding: 20px 0;
  padding-left: 30px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid lightgray;
}
.btnBox {
  /* border: 1px solid; */
  text-align: center;
  padding-bottom: 20px;
}
.cancelBtn {
  border: none;
  background-color: transparent;
  margin: 0 10px;
  padding: 10px;
  width: 50%;
}
.saveBtn {
  border: none;
  background-color: #000;
  color: #fff;
  margin: 0 10px;
  padding: 10px;
  border-radius: 18px;
  width: 50%;
  margin-bottom: 10px;
}
.close-button {
  float: right;
  width: 1.5rem;
  font-size: 1.2em;
  line-height: 1;
  padding: 0 0.2em 0.15em;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: var(--clr-neutral);
  color: var(--clr-dark);
  transition: color 0.12s ease-in-out;
  display: none;
}
.modalInpBox {
  position: relative;
}
.inpImg {
  position: absolute;
  left: 0%;
  top: 15px;
}
.close-button:hover {
  color: var(--clr-main);
}
.show-modal {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}
/* modal */

@media only screen and (max-width: 800px) {
  .sideBar {
    width: 50px;
  }
  .taskBox div p,
  .locationBox div p,
  .logoutBox div p {
    display: none;
  }
  .taskBox img,
  .locationBox img,
  .logoutBox img {
    margin: 0;
  }
  .modal-content {
    width: 90%;
  }
}
</style>
