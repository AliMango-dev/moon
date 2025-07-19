<script>
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      quantity: 1,
      min: 1,
      selectedColorIndex: null,
    };
  },
  methods: {
    increase() {
      this.quantity++;
    },
    decrease() {
      if (this.quantity > this.min) {
        this.quantity--;
      }
    },
    selectColor(index) {
      this.selectedColorIndex = index;
    },
  },
};
</script>

<template>
  <!-- Section 1 -->
  <section>
    <!-- Left Side -->
    <!-- Breadcrumb link tabs -->
    <div class="row g-2">
      <!-- Left Side -->
      <div class="col-sm-9 col-md-6 position-relative">
        <div class="container d-block ms-auto">
          <!-- Breadcrumb -->
          <div class="breadcrumb-links container mt-3 mb-5">
            <nav aria-label="breadcrumb w-50">
              <ol class="breadcrumb text-end">
                <li class="breadcrumb-item">
                  <router-link to="/home" class="text-secondary"
                    >Home</router-link
                  >
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/shop" class="text-secondary"
                    >Shop</router-link
                  >
                </li>
                <li
                  class="text-moon breadcrumb-item active"
                  aria-current="page"
                >
                  Marin White Dinner Plate
                </li>
              </ol>
            </nav>
          </div>

          <!-- Big plate picture -->
          <div class="container text-end mt-5">
            <img
              src="../assets/products-big-plate.svg"
              alt="big blue plate"
              class="img-fluid w-75 d-block ms-auto"
            />

            <div class="container d-block ms-auto mt-3">
              <nav class="d-flex justify-content-end gap-2 flex-wrap">
                <img src="../assets/products-choose-1.svg" alt="product 1" />
                <img src="../assets/products-choose-2.svg" alt="product 2" />
                <img src="../assets/products-choose-3.svg" alt="product 3" />
                <img src="../assets/products-choose-4.svg" alt="product 4" />
                <img src="../assets/products-choose-5.svg" alt="product 5" />
              </nav>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="col-sm-9 col-md-6">
        <div class="container">
          <h5 class="text-moon font-inter">Marin White Dinner Plate</h5>

          <div class="d-flex flex-wrap gap-2">
            <img
              src="../assets/products-star.svg"
              alt="star rate"
              class="mb-3"
            />
            <p class="fs-6">(1256 Reviews)</p>
            <p class="ms-4" style="color: #c69b7b">
              <span class="text-moon">Stock: </span> In Stock
            </p>
          </div>

          <div class="text-spacing d-flex flex-wrap mt-0 gap-4 fs-4">
            <p class="text-moon">$35</p>
            <p class="text-secondary">$50</p>
          </div>
        </div>

        <div class="container mt-3 fw-medium">
          <p style="color: #826f66">
            <span class="text-moon">Color: </span>Blue
          </p>

          <div>
            <nav class="d-flex flex-wrap gap-3">
              <div
                style="background-color: #a1b8be"
                class="color-box border border-2"
                :class="{ active: selectedColorIndex === 0 }"
                @click="selectColor(0)"
              ></div>
              <div
                class="color-box bg-white border border-2"
                :class="{ active: selectedColorIndex === 1 }"
                @click="selectColor(1)"
              ></div>
              <div
                style="background-color: #c88242"
                class="color-box border border-2"
                :class="{ active: selectedColorIndex === 2 }"
                @click="selectColor(2)"
              ></div>
              <div
                style="background-color: #212f39"
                class="color-box border border-2"
                :class="{ active: selectedColorIndex === 3 }"
                @click="selectColor(3)"
              ></div>
              <div
                style="background-color: #dcb9a8"
                class="color-box border border-2"
                :class="{ active: selectedColorIndex === 4 }"
                @click="selectColor(4)"
              ></div>
              <div
                style="background-color: #a7b2a3"
                class="color-box border border-2"
                :class="{ active: selectedColorIndex === 5 }"
                @click="selectColor(5)"
              ></div>
            </nav>
          </div>
        </div>

        <div class="container mt-5 d-flex flex-wrap gap-3 w-100">
          <!-- quintity Button-->
          <div
            class="quintity-button d-inline-flex align-items-center rounded-0 px-2"
          >
            <svg
              @click="decrease"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dash-lg me-3"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
              />
            </svg>
            <p class="quantity-output text-center mt-3" :min="min">
              {{ quantity }}
            </p>
            <svg
              @click="increase"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg ms-3"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </div>

          <div class="">
            <button class="btn bg-moon text-white rounded-0 h-100">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.breadcrumb-links {
  color: #807f86;
  text-decoration: none;
}

.tab-active {
  color: #3a3845;
}

.text-spacing {
  letter-spacing: 1px;
}

.color-box {
  height: 36px;
  width: 36px;
  border-color: #d1d5db;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.color-box.active {
  transform: scale(1.3);
}

.quantity-output {
  width: 60px;
  color: #3a3845;
}
.quantity-output::selection {
  color: #3a3845;
}

.quintity-button {
  border: #3a3845 solid 1.5px;
}

.breadcrumb-item a {
  text-decoration: none;
}
</style>
