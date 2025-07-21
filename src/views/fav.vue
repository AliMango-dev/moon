<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import favRow from "../components/favRow.vue";
import Homepage19 from "../assets/Homepage19.jpg";
import Homepage20 from "../assets/Homepage20.jpg";
import Homepage21 from "../assets/Homepage21.jpg";

const favItem = ref([
  {
    title: "Porcelain Dinner Plate (27cm)",
    price: "$59",
    image: Homepage19,
  },
  {
    title: "Ophelia Matte Natural Vase",
    price: "$168",
    image: Homepage20,
  },
  {
    title: "Porcelain Dinner Plate",
    price: "$70",
    image: Homepage21,
  },
]);

function removeItem(index) {
  favItem.value.splice(index, 1);
}
</script>

<template>
  <div class="fav-outer-container">
    <div class="container">
      <!-- path link section -->
      <nav aria-label="breadcrumb" style="margin-top: 20px">
        <ol class="breadcrumb bg-transparent px-0">
          <li class="breadcrumb-item">
            <router-link to="/home" class="text-muted text-decoration-none"
              >Home</router-link
            >
          </li>
          <li class="breadcrumb-item active text-dark" aria-current="page">
            Favourite
          </li>
        </ol>
      </nav>
      <!-- Title -->
      <h3
        class="fw-semibold"
        style="
          margin-top: 50px;
          margin-bottom: 40px;
          color: #3a3845;
          font-family: 'Inter', serif;
        "
      >
        Favourite ({{ favItem.length }} item<span v-if="favItem.length !== 1"
          >s</span
        >)
      </h3>
      <table class="table align-middle text-center">
        <thead>
          <tr class="text-uppercase">
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </th>
            <th>photo</th>
            <th>product</th>
            <th>price</th>
            <th>buy now!</th>
          </tr>
        </thead>
        <tbody>
          <favRow
            v-for="(item, index) in favItem"
            :key="index"
            :title="item.title"
            :price="item.price"
            :image="item.image"
            :addCartBtn
            @remove="removeItem(index)"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.fav-outer-container {
  width: 1350px;
  height: 1203px;
  margin-right: 165px;
  margin-left: 165px;
  font-family: "Inter", serif;
}
thead th {
  background-color: #3a3845 !important;
  color: white !important;
  padding: 15px;
}
</style>
