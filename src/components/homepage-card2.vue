<template>
  <div class="text-center">
    <img
      :src="image"
      :alt="image"
      style="width: 255px; height: 261px; object-fit: cover"
    />
    <h5 class="text-center text-uppercase fw-semibold fs-5 lh-sm mt-3">
      {{ title }}
    </h5>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
});
</script>
