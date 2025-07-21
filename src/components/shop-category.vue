<template>
  <h6 class="fw-semibold" style="font-family: 'Inter', serif; color: #3a3845">
    Showing 120 items
  </h6>

  <hr class="border-1 my-4" style="width: 238px" />

  <h6 class="fw-semibold" style="font-family: 'Inter', serif; color: #3a3845">
    Category
  </h6>
  <div v-for="(categ, i) in categories" :key="i" class="form-check mb-2">
    <input type="checkbox" class="form-check-input" :id="categ" />
    <label :for="categ" class="form-check-label">{{ categ }}</label>
  </div>

  <hr class="border-1 my-4" style="width: 238px" />

  <h6 class="fw-semibold" style="font-family: 'Inter', serif; color: #3a3845">
    Price Range
  </h6>
  <div v-for="(pri, i) in prices" :key="i" class="form-check mb-2">
    <input type="checkbox" class="form-check-input" :id="pri" />
    <label :for="pri" class="form-check-label">{{ pri }}</label>
  </div>

  <hr class="border-1 my-4" style="width: 238px" />

  <h6 class="fw-semibold" style="font-family: 'Inter', serif; color: #3a3845">
    Color
  </h6>
  <div class="d-flex gap-3">
    <span
      v-for="color in colors"
      :key="color"
      :style="{
        background: color,
        transform: selectedColor === color ? 'scale(1.4)' : 'scale(1)',
        border:
          selectedColor === color ? '1px solid #3a3845' : '1px solid #ccc',
      }"
      class="color-circle"
      @click="selectColor(color)"
    ></span>
  </div>

  <hr class="border-1 my-4" style="width: 238px" />

  <h6 class="fw-semibold" style="font-family: 'Inter', serif; color: #3a3845">
    Tags
  </h6>
  <div v-for="(tag, i) in tags" :key="i" class="form-check mb-2">
    <input type="checkbox" class="form-check-input" :id="tag" />
    <label :for="tag" class="form-check-label">{{ tag }}</label>
  </div>
</template>

<script setup>
import { ref } from "vue";

const categories = [
  "Dinnerware",
  "Ceramic",
  "Furniture",
  "Decor Art",
  "Gifts sets",
];
const tags = ["Dinnerware", "Ceramic", "Furniture", "Decor Art", "Gifts sets"];
const prices = ["$0 - $10", "$10 - $50", "$50 - $100", "$100 - $200", ">$200"];
const colors = ["#FFFFFF", "#D3A17E", "#D1E0D0", "#D98787", "#A297B2"];

const selectedColor = ref(null);

function selectColor(color) {
  selectedColor.value = color;
}
</script>

<style scoped>
.form-check-input:focus {
  box-shadow: none;
}

.form-check-input {
  width: 18px;
  height: 18px;
  border-radius: 0;
  border: 1.5px solid #3a3845;
  outline: none;
}

.form-check-input:checked {
  background-color: #3a3845;
  border-color: #3a3845;
}

.color-circle {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease, border 0.3s ease;
  cursor: pointer;
}
</style>
