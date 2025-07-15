<template>
  <div class="card">
    <img
      :src="image"
      class="card-img-top w-100"
      style="height: 350px; object-fit: cover"
      :alt="card"
    />
    <div class="card-body" style="padding: 0px">
      <h5 class="card-title text-start" style="color: #3a3845">{{ title }}</h5>
      <h4 class="text-start fs-5" style="color: #3a3845">{{ price }}</h4>
      <p class="card-text text-start" style="color: #807f86">
        {{ description }}
      </p>
      <a href="#" class="btn btn-primary text-uppercase mt-5 w-100"
        >Add to cart</a
      >
    </div>
  </div>
</template>

<style>
.card {
  width: 20rem;
  padding: 0px;
  border: none;
}
.card-body .btn {
  border: 2px solid #3a3845;
  border-radius: 0%;
  color: #3a3845;
  background-color: white;
}
</style>

<script setup>
defineProps({
  title: String,
  price: String,
  description: String,
  image: String,
});
</script>
