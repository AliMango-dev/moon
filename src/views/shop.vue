<template>
  <div class="outer-container">
    <div class="container">
      <!-- category section -->
      <div class="row">
        <p class="mt-4" style="margin-bottom: 20px">
          <span class="text-muted">Home</span> / Shop
        </p>
        <div class="d-flex justify-content-end align-items-center">
          <label for="sortSelect" class="me-2 text-muted fs-6">Sort by:</label>
          <select
            id="sortSelect"
            class="form-select w-auto border-0"
            v-model="selectedSort"
          >
            <option value="default">Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Title: A to Z</option>
            <option value="title-desc">Title: Z to A</option>
          </select>
        </div>
        <div class="col-md-auto" style="margin-right: 100px">
          <category />
        </div>
        <!-- cards section -->
        <div class="col-md">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 mt-1 ms-3">
            <div class="col" v-for="(card, index) in shopCards" :key="index">
              <shopCard
                :image="card.image"
                :title="card.title"
                :price="card.price"
                :description="card.description"
              />
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul
            class="pagination d-flex justify-content-end align-items-center mt-5"
          >
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    class="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    /></svg
                ></span>
              </a>
            </li>
            <li
              class="page-item px-2 mx-2"
              style="background-color: #3a3845; border: 2px solid #3a3845"
            >
              <a class="page-link text-white" href="#">1</a>
            </li>
            <li class="page-item px-2 mx-2" style="border: 2px solid #3a3845">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item mx-2"><a class="page-link" href="#">3</a></li>
            <li class="page-item mx-2"><a class="page-link" href="#">4</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    /></svg
                ></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import category from "../components/shop-category.vue";
import shopCard from "../components/homepage-card.vue";
import Homepage9 from "../assets/Homepage9.jpg";
import Homepage10 from "../assets/Homepage10.jpg";
import Homepage11 from "../assets/Homepage11.jpg";
import Homepage12 from "../assets/Homepage12.jpg";
import Homepage13 from "../assets/Homepage13.jpg";
import Homepage14 from "../assets/Homepage14.jpg";
import Homepage15 from "../assets/Homepage15.jpg";
import Homepage16 from "../assets/Homepage16.jpg";
import Shop1 from "../assets/Shop1.png";

const shopCards = [
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
  {
    image: Shop1,
    title: "Luana Bowl",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
];
</script>
<style scoped>
.outer-container {
  width: 1260px;
  margin-bottom: 60px;
  margin-left: 165px;
  margin-right: 165px;
}
.form-select:focus {
  outline: none;
  box-shadow: none;
  border-color: #ced4da;
}
.col {
  padding: 0px;
  width: 255px;
  margin-right: 30px;
}
.page-link {
  border: none !important;
  background-color: transparent !important;
  box-shadow: none;
  font-size: 1.3rem;
  color: #3a3845;
}
</style>
