<script setup>

</script>

<template>

<header>
<nav>
    <router-link class=" btn btn-primary" to="/">Home</router-link>
    <router-link class=" btn btn-primary" to="/about">About</router-link>
    <router-link class=" btn btn-primary" to="/contact">Contact</router-link>
</nav>
</header>

<main>
    <slot />
</main>

<footer>

</footer>

</template>

<style scoped>

</style>
