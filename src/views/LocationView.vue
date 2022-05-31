<template>
  <div class="sideBar">
    <div>
      <section class="taskBox">
        <div><img src="../assets/task.png" alt="" /></div>
        <div><p>Task</p></div>
      </section>
      <section class="locationBox">
        <div><img src="../assets/location1.png" alt="" /></div>
        <div><p>Location</p></div>
      </section>
      <section class="logout">
        <section class="logoutBox">
          <div><img src="../assets/logout.png" alt="" /></div>
          <div><p>Logout</p></div>
        </section>
      </section>
    </div>
  </div>
  <!-- SideBar -->

  <!-- Page content -->
  <div class="content">
    <div class="check">
      <h2>+check In</h2>
    </div>
    <div class="current">
      <h2>Currrent Location</h2>
      <p>{{placeName}}</p>
    </div>
    <div class="address">
      <img class="pin" src="../assets/pin.png" alt="" />
      <p class="stockholm">Pustegrand, Stockholm, SE</p>
      <small>59.3293 N, 18.0686 E</small>
    </div>

    <div class="current1">
      <h5>Previous Location</h5>

      <div class="">
        <section>
          <div class="address">
            <img class="pin" src="../assets/pin.png" alt="" />
            <p class="stockholm">Halsingegatan, Stockholm, SE</p>
            <small>59.3293 N, 18.0686 E</small>
          </div>
        </section>
        <section>
          <div class="address locate">
            <img class="pin" src="../assets/pin.png" alt="" />
            <p class="stockholm">Pustegrand, Stockholm, SE</p>
            <small>59.3293 N, 18.0686 E</small>
          </div>
        </section>
        <section>
          <div class="address locate2">
            <img class="pin" src="../assets/pin.png" alt="" />
            <p class="stockholm">Langa Gatan, Stockholm, SE</p>
            <small>59.3293 N, 18.0686 E</small>
          </div>
        </section>
        <section>
          <div class="address locate1">
            <img class="pin" src="../assets/pin.png" alt="" />
            <p class="stockholm">Djurgarden, Stockholm, SE</p>
            <small>59.3293 N, 18.0686 E</small>
          </div>
        </section>
        <section>
          <div class="address locate">
            <img class="pin" src="../assets/pin.png" alt="" />
            <p class="stockholm">Svartensgatan, Stockholm, SE</p>
            <small>59.3293 N, 18.0686 E</small>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      latitude: 0,
      logitude: 0,
      placeName: "",
    };
  },
  async mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((e) => {
        this.latitude = e.coords.latitude;
        this.logitude = e.coords.longitude;
       this.getPlace(e.coords.longitude, e.coords.latitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },
  methods: {
    async getPlace  (long, lat) {
    console.log(long, lat);
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?types=place&limit=1&access_token=pk.eyJ1IjoibWF0cml4LXRlY2giLCJhIjoiY2wxZGJhMHR3MGZ2ZjNkczloOTRpZDQ2bCJ9.CzgTvH3duaPWKHY6aWNEJA&country=pk`
    );
    const myDAta = await response.json();
    console.log("api ", myDAta);
    let place =
      myDAta?.features?.length !== 0
        ? myDAta?.features?.[0].place_name
        : "Karachi Pakistan";

    if (myDAta?.features?.length) {
      this.placeName = myDAta?.features?.[0].place_name;
    }
    },
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 18%;
  padding: 1px 16px;
  height: 100vh;
}

.check {
  margin-left: 60px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #575767;
  margin-top: 20px !important;
}

.current {
  margin-left: 60px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #575767;
  margin-top: 20px !important;
}

.address {
  position: relative;
  margin-left: 10px;
}

.pin {
  position: absolute;
  margin-left: -10px;
  width: 24px;
  height: 18px;
  top: -5px;
  left: 50px;
  color: #000000;
}

.stockholm {
  margin: 20px 0;
  margin-left: 80px;
  width: 302px;
  height: 24px;

  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  color: #575767;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
}

small {
  position: absolute;
  /* maar */
  margin-left: 80px;
  width: 302px;
  height: 24px;
  top: 25px;
  text-align: start;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #b9b9be;
  font-family: "Inter";
  font-style: normal;
}

.current1 {
  position: relative;
}

.locate {
  margin-top: 30px;
}

.locate1 {
  margin-top: 30px;
}

.locate2 {
  margin-top: 30px;
}

h5 {
  margin: 20px 0;
  position: absolute;
  margin-left: 95px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #575767;
}
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

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 500px) {
  div.content {
    margin-left: 0;
  }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */

@media screen and (max-width: 500) {
  .content {
    position: relative;
  }
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
</style>
