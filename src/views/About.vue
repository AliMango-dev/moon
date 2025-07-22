<script setup>
import { useRouter } from "vue-router";
</script>

<template>
  <!-- section 1 -->
  <div class="text-center my-5 sec1">
    <h2>ABOUT MOON</h2>
    <p>
      Moon's handmade ceramic products have been around <br />
      since 1650, let's explore our journey
    </p>
  </div>

  <!-- section 2 -->
  <div class="container" style="max-width: 1134px">
    <!-- First row -->
    <div class="d-flex sec2 mb-0 align-items-center">
      <div
        class="firstrow d-flex flex-column justify-content-center align-items-center"
      >
        <h2>1910</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing eli <br />
          mattis sit phasellus mollis sit aliquam sit nullam neque <br />
          ultrices.
        </p>
      </div>
      <img class="img1" src="../assets/About1.png" alt="About1" />
    </div>

    <!-- Second row -->
    <div class="d-flex sec2 mb-0 align-items-center">
      <img class="img1" src="../assets/About2.jpg" alt="About2" />
      <div
        class="firstrow d-flex flex-column justify-content-center align-items-center"
      >
        <h2>1910</h2>
        <p>
          Maecenas sem eros, rutrum vitae risus eget, vulputate<br />
          aliquam nisi. dolor sit amet consectetur adipiscing eli <br />
          mattis sit phasellus mollis sit aliquam sit
        </p>
      </div>
    </div>

    <!-- Third row -->
    <div class="d-flex sec2 mb-0 align-items-center">
      <div
        class="firstrow d-flex flex-column justify-content-center align-items-center"
      >
        <h2>2010</h2>
        <p>
          Rutrum vitae risus eget, vulputate aliquam nisi ex gravida<br />
          neque tempus. sit aliquam sit nullam neque ultrices
        </p>
      </div>
      <img class="img1" src="../assets/About3.png" alt="About3" />
    </div>
  </div>

  <!-- section 3 -->
  <div class="container mt-5" style="max-width: 1134px">
    <div class="d-flex sec2 align-items-center">
      <div class="about4-container">
        <img class="img2" src="../assets/About4.png" alt="About4" />
      </div>

      <div class="secondrow mx-5">
        <h2 class="mb-5 title">HOW WE WORKS</h2>
        <p class="semtitle">Product design</p>
        <p class="semnot">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis.
        </p>

        <p class="semtitle">Crafted</p>
        <p class="semnot">
          Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
          tempus.
        </p>

        <p class="semtitle">Sell product</p>
        <p class="semnot">
          Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.
        </p>
      </div>
    </div>
  </div>

  <!-- Team section -->
  <div class="container outer mt-5">
    <h1 class="text-center teamtitle">MEET OUR TEAM</h1>
    <div class="inner d-flex flex-wrap justify-content-center gap-4 mt-5">
      <div class="team-member text-center">
        <img src="../assets/YM.jpg" alt="Team1" class="sec2-logo" />
        <h5 class="mt-3">ABU ABDULADHEEM</h5>
        <p>CEO & Founder</p>
      </div>
      <div class="team-member text-center">
        <img src="../assets/YM2.jpg" alt="Team2" class="sec2-logo" />
        <h5 class="mt-3">ABU ABDULADHEEM</h5>
        <p>Creative Director</p>
      </div>
      <div class="team-member text-center">
        <img src="../assets/YM.jpg" alt="Team3" class="sec2-logo" />
        <h5 class="mt-3">ABU ABDULADHEEM</h5>
        <p>Artist</p>
      </div>
      <div class="team-member text-center">
        <img src="../assets/YM2.jpg" alt="Team4" class="sec2-logo" />
        <h5 class="mt-3">ABU ABDULADHEEM</h5>
        <p>Marketing</p>
      </div>
    </div>
  </div>

  <!-- Newsletter -->
  <div class="outer-container mt-5 mb-5">
    <div class="container text-center">
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
          class="form-control form-control-lg text-center mx-auto"
          style="max-width: 500px"
        />
      </form>
      <router-link to="/signup">
        <button
          class="fs-6 fw-semibold text-uppercase border border-2 py-2 px-4 mt-5 d-inline-block text-decoration-none"
          style="
            background: none;
            border-color: #3a3845 !important;
            color: #3a3845;
          "
        >
          sign up
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Garamond", sans-serif;
}

.sec1 h2 {
  font-weight: 700;
  font-size: 36px;
  color: #3a3845;
}

.sec1 p {
  font-weight: 400;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #595667;
}

.sec2 .img1 {
  width: 555px;
  height: 348px;
  object-fit: cover;
  object-position: center;
}

.firstrow {
  background-color: #f7f6f5;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 555px;
  height: 348px;
  margin: 0;
}

.firstrow h2 {
  font-weight: 700;
  font-size: 36px;
  color: #3a3845;
}

.firstrow p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #595667;
  margin: 0;
}

.sec2 {
  gap: 0;
}

.about4-container {
  width: 100%;
  max-width: 555px;
  aspect-ratio: 555 / 443;
  overflow: hidden;
}

.img2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.secondrow .title {
  font-family: "Garamond";
  font-weight: 700;
  font-size: 28px;
  color: #3a3845;
}

.secondrow .semtitle {
  font-weight: 600;
  font-size: 18px;
  color: #3a3845;
}

.secondrow .semnot {
  font-weight: 400;
  font-size: 16px;
  color: #595667;
}

.inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.outer {
  width: 100%;
  max-width: 1440px;
  margin: 100px auto 80px auto;
  padding-bottom: 40px;
  height: auto;
}

.sec2-logo {
  width: 255px;
  height: 321px;
  object-fit: cover;
}

.teamtitle {
  font-weight: 700;
  font-size: 38px;
  line-height: 36px;
  color: #3a3845;
}

h5 {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
}

.team-member p {
  margin-top: 4px;
  margin-bottom: 0;
}

.outer-container {
  width: 100%;
  min-height: 40svh;
}

.outer-container #email {
  border-radius: 0%;
  border-color: #3a3845;
  border: none;
  border-bottom: 2px solid #3a3845;
  box-shadow: none;
  max-width: 500px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 992px) {
  .sec2 {
    flex-direction: column !important;
  }

  .sec2 > img {
    order: -1;
    width: 100% !important;
    height: auto !important;
    margin-bottom: 10px;
  }

  .firstrow {
    width: 100% !important;
    height: auto !important;
  }

  .about4-container {
    max-width: 100%;
    aspect-ratio: unset;
    height: auto;
  }

  .img2 {
    width: 100%;
    height: auto;
  }
}
@media (max-width: 576px) {
  .firstrow p {
    font-size: 18px !important;
    line-height: 28px !important;
  }

  .firstrow h2 {
    font-size: 28px !important;
  }
}
</style>
