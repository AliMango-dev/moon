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
import Homepage19 from "../assets/Homepage19.jpg";
import Homepage20 from "../assets/Homepage20.jpg";
import Homepage21 from "../assets/Homepage21.jpg";
import Homepage22 from "../assets/Homepage22.jpg";

const sec3Cards = [
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
const sec5Cards = [
  {
    image: Homepage19,
    title: "Porcelain Dinner Plate",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage20,
    title: "Ophelia Matte Natural  Vase",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage21,
    title: "Porcelain Dinner Plate",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage22,
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
      <div
        class="d-flex flex-column align-items-center"
        style="background-color: #826f66; height: 640px; width: 420px"
      >
        <img
          src="../assets/Homepage23.png"
          alt="moon-logo"
          class="sec1-moon-logo"
        />
        <p class="fs-5 text-white mt-3">Handcrafted in Viet Nam since 1650</p>
        <h3
          class="text-center fs-2 fw-bold lh-sm mt-3"
          style="color: #fffdfb; font-family: 'Garamond', serif"
        >
          BAT TRANG
          <br />
          DINNER SET
        </h3>
        <button
          class="fs-5 fw-semibold mt-5 border-0 rounded"
          style="
            width: 220px;
            height: 40px;
            background-color: #ffffff;
            color: #826f66;
          "
        >
          Shop Now
        </button>
      </div>
    </div>
  </div>
  <!-- section 2 -->
  <!-- part1 -->
  <div class="outer-container">
    <div class="container">
      <div
        class="d-flex flex-row justify-content-center align-items-center flex-wrap gap-4"
        style="margin-top: 100px"
      >
        <div>
          <img
            src="../assets/Homepage2.jpg"
            alt="moon-logo"
            style="width: 255px; height: 260px"
          />
          <h5 class="text-center text-uppercase fw-semibold fs-5 lh-sm mt-3">
            TableWare
          </h5>
        </div>

        <div>
          <img
            src="../assets/Homepage3.jpg"
            alt="moon-logo"
            style="width: 255px; height: 260px"
          />
          <h5 class="text-center text-uppercase fw-semibold fs-5 lh-sm mt-3">
            Home decor
          </h5>
        </div>
        <div>
          <img
            src="../assets/Homepage4.jpg"
            alt="moon-logo"
            style="width: 255px; height: 260px"
          />
          <h5 class="text-center text-uppercase fw-semibold fs-5 lh-sm mt-3">
            Holiday
          </h5>
        </div>

        <div>
          <img
            src="../assets/Homepage5.jpg"
            alt="moon-logo"
            style="width: 255px; height: 260px"
          />
          <h5 class="text-center text-uppercase fw-semibold fs-5 lh-sm mt-3">
            collection
          </h5>
        </div>
      </div>
    </div>
    <!-- part2 -->
    <div class="outer-container">
      <div class="container">
        <div
          class="row row-cols-2 mx-auto"
          style="margin-top: 100px; max-width: 1200px"
        >
          <div
            class="col d-flex flex-column justify-content-center align-items-center"
            style="background-color: #f7f6f5"
          >
            <h4
              class="text-center text-uppercase fw-bold lh-base"
              style="
                font-family: 'Garamond', serif;
                color: #3a3845;
                letter-spacing: 1px;
              "
            >
              Up to 40% off our
              <br />
              Christmas collection
            </h4>
            <p
              class="fw-normal fs-5 lh-sm text-center"
              style="color: #595667; font-family: 'Inter', serif"
            >
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <button
              class="fw-bold fs-6 lh-base border-0 text-uppercase text-decoration-underline"
              style="
                color: #3a3845;
                background: none;
                font-family: 'Inter', serif;
                width: 120px;
                height: 40px;
              "
            >
              Shop Now
            </button>
          </div>
          <div class="col p-0">
            <img src="../assets/Homepage24.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- section 3 -->
  <div class="outer-container">
    <div class="container">
      <h1
        class="mt-5 text-center fw-bold text-uppercase"
        style="font-family: 'Garamond', serif"
      >
        Best Sellers
      </h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5 mt-1">
        <!-- section 3 cards -->
        <div class="col" v-for="(card, index) in sec3Cards" :key="index">
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
      <div
        class="row row-cols-2 text-center d-flex justify-content-center align-items-center"
        style="margin-top: 90px"
      >
        <div
          class="d-flex flex-column justify-content-center align-items-center"
          style="background-color: #f7f6f5; width: 555px; height: 350px"
        >
          <h4
            class="fs-3 fw-bold text-uppercase lh-lg"
            style="
              font-family: 'Garamond', serif;
              color: #3a3845;
              letter-spacing: 1px;
            "
          >
            Made in viet Nam
            <br />
            since 1450
          </h4>
          <p
            class="fs-5 fw-normal lh-sm"
            style="color: #595667; font-family: 'Inter', sans-serif"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button
            class="mt-3 fs-6 fw-bold border-0 bg-transparent text-decoration-underline text-uppercase"
            style="color: #3a3845; font-family: 'Inter', sans-serif"
          >
            Learn more
          </button>
        </div>
        <div
          style="width: 555px; height: 350px; padding: 0px; overflow: hidden"
        >
          <img src="../assets/Homepage17.jpg" alt="card" class="img17" />
        </div>
        <div
          style="width: 555px; height: 350px; padding: 0px; overflow: hidden"
        >
          <img
            src="../assets/Homepage18.png"
            alt="card"
            class="w-100 h-100 d-block object-fit-cover"
          />
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center"
          style="background-color: #f7f6f5; width: 555px; height: 350px"
        >
          <h4
            class="fs-3 fw-bold text-uppercase lh-lg"
            style="
              font-family: 'Garamond', serif;
              color: #3a3845;
              letter-spacing: 1px;
            "
          >
            Our History
          </h4>
          <p
            class="fs-5 fw-normal lh-sm"
            style="color: #595667; font-family: 'Inter', sans-serif"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button
            class="mt-3 fs-6 fw-bold border-0 bg-transparent text-decoration-underline text-uppercase"
            style="color: #3a3845; font-family: 'Inter', sans-serif"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- section 5 -->
  <div class="outer-container">
    <div class="container">
      <h1
        class="text-uppercase fw-bold lh-lg text-center my-5"
        style="font-family: 'Garamond', serif; color: #3a3845"
      >
        Discover new arrivals
      </h1>
      <div class="d-flex flex-row gap-3">
        <div class="col" v-for="(card, index) in sec5Cards" :key="index">
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
  <!-- section 6 -->
  <div class="outer-container">
    <div class="container">
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style="margin-top: 100px"
      >
        <p
          class="fs-6 fw-semibold"
          style="color: #595667; font-family: 'Inter', serif"
        >
          Sign up for emails
        </p>
        <h2
          class="fs-1 fw-bold text-uppercase mb-3"
          style="
            letter-spacing: 1px;
            font-family: 'Garamond', serif;
            color: #3a3845;
          "
        >
          For news, collections & more
        </h2>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            class="form-control form-control-lg text-center"
          />
        </form>
        <a
          href="#"
          class="fs-6 fw-semibold text-uppercase border border-2 py-2 px-4 mt-5 d-inline-block text-decoration-none"
          style="
            background: none;
            border-color: #3a3845 !important;
            color: #3a3845;
          "
        >
          sign up
        </a>
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
.sec1-moon-logo {
  width: 85px;
  height: 81px;
  margin-top: 150px;
  margin-bottom: 20px;
}
.outer-container {
  width: 100%;
  min-height: 40svh;
}
.outer-container .container #email {
  border-radius: 0%;
  border-color: #3a3845;
  border: none;
  border-bottom: 2px solid #3a3845;
  box-shadow: none;
  width: 500px;
}
</style>
