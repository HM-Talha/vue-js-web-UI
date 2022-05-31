<script>

</script>

<template>
  <div class="SideBar">
    <section class="adminLogo">
      <div>D</div>
      <p>Admin Panel</p>
    </section>
    <section class="navs">
      <div><img src="../assets/Vector.png" alt="" /></div>
      <p>Overview</p>
    </section>
    <section class="navs">
      <div><img src="" alt="" /></div>
      <p>Users</p>
    </section>
  </div>

  <div class="rightSide">
    <header class="header">
      <section><span>Users</span></section>
      <section class="headDetails">
        <p>Jones Ferdinand</p>
        <div><img src="../assets/user-1.png" width="100%" alt="" /></div>
      </section>
    </header>
    <div class="addingTask">
      <section><button>+</button>Add Task</section>
      <section><button class="trigger">+</button> Add Location</section>
    </div>

    <div class="table">
      <header class="tableHeader">
        <section>
          <p class="users">All Users</p>
        </section>
        <section class="tableMenu">
          <p><i class="fa-solid fa-bars-staggered"></i> Sort</p>
          <p><i class="fa-solid fa-filter"></i> Filter</p>
        </section>
      </header>

      <table>
        <thead>
          <tr>
            <td>User Detail</td>
            <td>Total Task</td>
            <td>Last Update</td>
            <td colspan="1"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Tom Cruise <br />
              <span>active One Day Ago</span>
            </td>
            <td>35</td>
            <td>
              Feb 26 , 2021 <br />
              <span> 6:30PM</span>
            </td>
            <td class="dotIcon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </td>
          </tr>
          <tr>
            <td>
              Tom Cruise <br />
              <span>active One Day Ago</span>
            </td>
            <td>35</td>
            <td>
              Feb 26 , 2021 <br />
              <span> 6:30PM</span>
            </td>
            <td class="dotIcon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </td>
          </tr>
          <tr>
            <td>
              Tom Cruise <br />
              <span>active One Day Ago</span>
            </td>
            <td>35</td>
            <td>
              Feb 26 , 2021 <br />
              <span> 6:30PM</span>
            </td>
            <td class="dotIcon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </td>
          </tr>
          <tr>
            <td>
              Tom Cruise <br />
              <span>active One Day Ago</span>
            </td>
            <td>35</td>
            <td>
              Feb 26 , 2021 <br />
              <span> 6:30PM</span>
            </td>
            <td class="dotIcon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </td>
          </tr>
          <tr>
            <td>
              Tom Cruise <br />
              <span>active One Day Ago</span>
            </td>
            <td>35</td>
            <td>
              Feb 26 , 2021 <br />
              <span> 6:30PM</span>
            </td>
            <td class="dotIcon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </td>
          </tr>
          <tr>
            <td>
              Tom Cruise <br />
              <span>active One Day Ago</span>
            </td>
            <td>35</td>
            <td>
              Feb 26 , 2021 <br />
              <span> 6:30PM</span>
            </td>
            <td class="dotIcon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </td>
          </tr>
          <tr>
            <td>
              Tom Cruise <br />
              <span>active One Day Ago</span>
            </td>
            <td>35</td>
            <td>
              Feb 26 , 2021 <br />
              <span> 6:30PM</span>
            </td>
            <td class="dotIcon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </td>
          </tr>
          <tr>
            <td>
              Tom Cruise <br />
              <span>active One Day Ago</span>
            </td>
            <td>35</td>
            <td>
              Feb 26 , 2021 <br />
              <span> 6:30PM</span>
            </td>
            <td class="dotIcon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <td></td>
          <td></td>
          <td>Rows per page 8 <i class="fa-solid fa-caret-down"></i></td>
          <td>
            1-8 of 1240 <i class="fa-solid fa-angle-left"></i
            ><i class="fa-solid fa-angle-right"></i>
          </td>
        </tfoot>
      </table>
    </div>

    <div class="modal">
      <div class="modal-content modalContent">
        <span class="close-button">&times;</span>
        <div>
          <p class="newLocation">New Locations</p>
        </div>
        <div class="modalInpBox">
          <section class="modalInpBox">
            <input type="text" placeholder="Location" />
            <img class="inpImg" src="../assets/location1.png" alt="" />
          </section>
        </div>

        <section class="btnBox btnBoxUser">
          <button class="cancelBtn" id="modal">Cancel</button>
          <button class="saveBtn">Save</button>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-boxs;
  font-family: sans-serif;
}
body {
  background-color: #e5e5e5;
}
/* sideBar */
.SideBar {
  background-color: black;
  width: 18%;
  height: 100vh;
  position: fixed;
  left: 0;
  color: white;
  padding: 10px 0;
}
.adminLogo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.adminLogo div {
  padding: 10px 12px;
  border-radius: 50%;
  margin-right: 10px;
  font-weight: bolder;
  font-size: 1.5rem;
  background-color: #19b88e;
}
.adminLogo p {
  font-weight: bolder;
  font-size: 1.5rem;
}
.navs {
  display: flex;
  /* justify-content: center; */
  /* margin: 30px 0; */
  padding-left: 10%;
  padding: 10px;
  color: #9fa2b4;
}
.navs:hover {
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
  background-color: #9fa2b4;
}
.navs div {
  margin-right: 12px;
}
.navs p {
  margin-right: 12px;
}
/* sideBar */

.rightSide {
  margin-left: 20%;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}
.header section {
  padding: 20px;
}
.forLocation {
  display: flex;
}
.location {
  margin-left: 15px;
  color: #9fa2b4;
}

.header section span {
  /* border: 1px solid; */
  padding: 20px;
  font-weight: bolder;
  font-size: 1.3rem;
}
.header div {
  width: 40px;
  border-radius: 50%;
  margin: 0 10px;
  margin-left: 15px;
}
.header div img {
  border-radius: 50%;
}
.headDetails {
  display: flex;
  justify-content: center;
  align-items: center;
}
.addingTask {
  margin-right: 30px;
  display: flex;
  justify-content: flex-end;
}
.addingTask section {
  margin: 0 10px;
}
.addingTask section button {
  padding: 4px 6px;
  border: none;
  color: #9fa2b4;
  background-color: #f0f1f7;
  border-radius: 5px;
  margin: 0 15px;
  font-weight: bolder;
}
/* Header */

/* Table */
.table {
  /* border: 1px solid yellow; */
  padding: 10px;
  margin: 10px;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.tableHeader {
  /* border: 1px solid; */
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.tableMenu {
  padding-right: 20px;
  display: flex;
  /* border: 1px solid; */
}
.tableMenu p {
  margin: 0 10px;
  color: #4b506d;
  font-size: 0.8rem;
}
.users {
  font-weight: bolder;
}
table {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
  /* border: 1px solid; */
}
td {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  padding-left: 20px;
  font-size: 14px;
}
.dotIcon {
  text-align: right;
  padding-right: 25px;
}

tfoot td,
thead td {
  color: #9fa2b4;
  /* font-weight: bolder; */
  font-size: 14px;
}
tbody tr:hover {
  background-color: #f7f8ff;
  cursor: pointer;
}
table td span {
  /* border:1px solid; */
  color: #c5c7cd;
  font-size: 12px;
  display: inline-block;
  padding: 5px 0;
}
table td i {
  color: #c5c7cd;
}
table td {
}
/* Table */

/* modal */
@import url("https://fonts.googleapis.com/css?family=Quicksand:700&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --clr-main: #d75b4c;
  --clr-dark: #333;
  --clr-neutral: #ddd;
  --clr-light: #fff;
}

.btn {
  padding: 1em 3em;
  margin-bottom: 2rem;
  border: none;
  border-radius: 1.5em;
  background-color: var(--clr-main);
  font-family: inherit;
  color: var(--clr-light);
  transition: filter 0.15s ease-in-out;
  cursor: pointer;
}

.btn:hover {
  filter: brightness(1.1);
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
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
}
.cancelBtn {
  border: none;
  background-color: transparent;
  margin: 0 10px;
  padding: 10px;
  width: 120px;
}
.saveBtn {
  border: none;
  background-color: #000;
  color: #fff;
  margin: 0 10px;
  padding: 10px;
  border-radius: 8px;
  width: 120px;
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

/* modal 2 */
.modalContent {
  height: 250px;
}
.btnBoxUser {
  margin-top: 50px;
}
.newLocation {
  font-weight: bolder;
}
/* modal 2 */

/* mediaQuerry */
@media only screen and (max-width: 1130px) {
  .adminLogo div,
  .adminLogo p {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 600px) {
  .adminLogo p,
  .navs p {
    display: none;
    text-align: center;
  }
  .navs {
    margin: 0;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .SideBar {
    width: 60px;
  }
  .rightSide {
    margin-left: 12%;
  }
  .headDetails {
    padding: 0px !important;
    margin: 0;
    /* border: 1px solid; */
  }
  .addingTask {
    justify-content: center;
    margin-top: 10px;
  }
  table td {
    font-size: 12px;
  }
  .modal-content {
    width: 90%;
    height: 300px;
  }
}

/* mediaQuerry */
</style>
