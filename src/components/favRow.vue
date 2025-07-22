<template>
  <tr class="border-bottom align-middle">
    <td class="text-center py-3">
      <svg
        @click="$emit('remove')"
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        fill="currentColor"
        class="bi bi-x-lg text-danger"
        viewBox="0 0 16 16"
        style="cursor: pointer"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
        />
      </svg>
    </td>

    <td class="py-3">
      <div class="d-flex justify-content-center align-items-center">
        <div class="img-container">
          <img
            :src="image"
            :alt="title"
            class="img-fluid"
            style="max-height: 160px; object-fit: contain"
          />
        </div>
      </div>
    </td>

    <td class="text-center py-3">
      <h5 class="mb-0">{{ title }}</h5>
    </td>

    <td class="text-center py-3">
      <h5 class="mb-0">{{ price }}</h5>
    </td>

    <td class="text-center py-3">
      <button style=" background-color:#3a3845 ; color: #FFF;" class="btn w-100 d-none d-md-inline">{{ addCartBtn }}</button>
      <button style=" background-color:#3a3845 ; color: #FFF;" class="btn w-100 d-inline d-md-none">Buy</button>
    </td>
  </tr>
</template>

<script setup>
defineProps({
  title: String,
  price: String,
  image: String,
  addCartBtn: {
    type: String,
    default: "Add to cart",
  },
});
</script>

<style scoped>
td {
  border-bottom: 2px solid #3a3845 !important;
}
.img-container {
  width: 100%;
  max-width: 128px;
  overflow: hidden;
}
</style>
