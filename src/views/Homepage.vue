<script setup>
import { useRouter } from "vue-router";
</script>

<template>
  <!-- section 1 -->
  <div class="sec1-homepage-bg">
    <div class="container">
      <div class="sec1-homepage-content">
        <img
          src="../assets/Homepage23.png"
          alt="moon-logo"
          id="sec1-moon-logo"
        />
        <p>Handcrafted in Viet Nam since 1650</p>
        <h3 id="sec1-homepage-title">
          BAT TRANG
          <br />
          DINNER SET
        </h3>
        <button id="sec1-homepage-button">Shop Now</button>
      </div>
    </div>
  </div>
  <!-- section 2 -->
   <!-- part1 -->
  <div class="sec2-outer-container">
    <div class="container">
      <div class="sec2-inner-container">
        <div>
          <img
            src="../assets/Homepage2.jpg"
            alt="moon-logo"
            class="sec2-logo"
          />
          <h5>TableWare</h5>
        </div>

        <div>
          <img
            src="../assets/Homepage3.jpg"
            alt="moon-logo"
            class="sec2-logo"
          />
          <h5>Home decor</h5>
        </div>

        <div>
          <img
            src="../assets/Homepage4.jpg"
            alt="moon-logo"
            class="sec2-logo"
          />
          <h5>Holiday</h5>
        </div>

        <div>
          <img
            src="../assets/Homepage5.jpg"
            alt="moon-logo"
            class="sec2-logo"
          />
          <h5>collection</h5>
        </div>
      </div>
    </div>
    <!-- part2 -->
    <div class="sec2-outer-container">
      <div class="container">
        <div class="sec2-inner-container-p2">
          <div class="sec2-p2-block1">
            <h4>
              Up to 40% off our
              <br />
              Christmas collection
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <button>Shop Now</button>
          </div>
          <div>
            <img src="../assets/Homepage24.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sec1-homepage-bg {
  background-image: url("../assets/Homepage1.jpg");
  background-size: cover;
  background-position: center;
  height: 640px;
  width: 100%;
}
.sec1-homepage-content {
  background-color: #826f66;
  height: 640px;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#sec1-moon-logo {
  width: 85px;
  height: 81px;
  margin-top: 150px;
  margin-bottom: 20px;
}
p {
  font-size: 20px;
  color: white;
  margin-top: 15px;
}
#sec1-homepage-title {
  font-size: 40px;
  font-family: garamoud;
  color: #fffdfb;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 40px;
  margin-top: 10px;
}
#sec1-homepage-button {
  width: 220px;
  height: 40px;
  background-color: #ffffff;
  border: 0;
  border-radius: 10px;
  color: #826f66;
  font-size: 18px;
  font-weight: 600;
  margin-top: 50px;
}
.sec2-outer-container {
  width: 100%;
  height: 450px;
}
.sec2-inner-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 100px;
  gap: 20px;
}
.sec2-logo {
  width: 255px;
  height: 260px;
}
h5 {
  text-align: center;
  margin-top: 10px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 24px;
}
.sec2-inner-container-p2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.sec2-p2-block1 {
  background-color: #f7f6f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sec2-p2-block1 h4 {
  font-family: Garamond;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 4%;
  line-height: 32px;
  text-transform: uppercase;
  color: #3a3845;
}
.sec2-p2-block1 p {
  color: #595667;
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
}
.sec2-p2-block1 button {
  width: 120px;
  height: 40px;
  color: #3a3845;
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  background: none;
  border: none;
  text-transform: uppercase;
  text-decoration: underline;
}
</style>
