<template>
  <div class="card">
    <img
      :src="image"
      class="card-img-top w-100"
      style="height: 350px; object-fit: cover"
      :alt="card"
    />
    <div class="card-body" style="padding: 0px">
      <h6
        class="card-title text-start fw-semibold text-uppercase lh-base mt-3"
        style="
          color: #3a3845;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
        "
      >
        {{ title }}
      </h6>
      <h6
        class="text-start"
        style="
          color: #3a3845;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
        "
      >
        {{ price }}
      </h6>
      <p
        class="card-text text-start mt-3"
        style="
          color: #807f86;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
        "
      >
        {{ description }}
      </p>
      <a href="#" class="btn text-uppercase fs-5 mt-5 w-100">Add to cart</a>
    </div>
  </div>
</template>

<style>
.card {
  width: 255px;
  padding: 0px;
  border: none;
  transition: transform 0.3s ease; 
}

.card:hover {
  transform: scale(1.03); 
}

.card-body .btn {
  border: 2px solid #3a3845;
  border-radius: 0%;
  color: #3a3845;
  background-color: white;
  font-family: "Inter", sans-serif;
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
