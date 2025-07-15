<script setup>
import { useRouter } from "vue-router";
import homepageCard from "../components/homepage-card.vue";
import Homepage9 from "../assets/Homepage9.jpg";
import Homepage10 from "../assets/Homepage10.jpg";
import Homepage11 from "../assets/Homepage11.jpg";
import Homepage12 from "../assets/Homepage12.jpg";
import Homepage13 from "../assets/Homepage13.jpg";
import Homepage14 from "../assets/Homepage14.jpg";
import Homepage15 from "../assets/Homepage15.jpg";
import Homepage16 from "../assets/Homepage16.jpg";

const cards = [
  {
    image: Homepage9,
    title: "Small Ecru Ceramic Compote",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage10,
    title: "Warrick White Vase 14'",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage11,
    title: "Porcelain Dinner Plate",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage12,
    title: "Warrick White Vase 20",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage13,
    title: "Rounded Dual Handled Vase",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage14,
    title: "Marin White Dinner Plate",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage15,
    title: "Tall Cream Ceramic Vase",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage16,
    title: "Luana Bowl",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
];
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
        <h3 id="sec1-homepage-title" class="text-center">
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
  <div class="outer-container">
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
    <div class="outer-container">
      <div class="container">
        <div class="sec2-inner-container-p2">
          <div class="sec2-p2-block1">
            <h4 class="text-center">
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
  <!-- section 3 -->
  <div class="outer-container">
    <div class="container text-center">
      <h1 class="mt-5">Best Sellers</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5 mt-1">
        <!-- section 3 cards -->
        <div class="col" v-for="(card, index) in cards" :key="index">
          <homepageCard
            :image="card.image"
            :title="card.title"
            :price="card.price"
            :description="card.description"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- section 4 -->
  <div class="outer-container">
    <div class="container">
      <div class="row row-cols-2" style="margin-top: 90px">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
          style="background-color: #f7f6f5"
        >
          <h4>
            Made in viet Nam
            <br />
            since 1450
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button>Learn more</button>
        </div>
        <div style="padding: 0px">
          <img src="../assets/Homepage17.jpg" alt="card" />
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
.outer-container {
  width: 100%;
  min-height: 40svh;
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
