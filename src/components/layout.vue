<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const hideLayoutRoutes = ['Authentication']

const shouldHideLayout = computed(() => hideLayoutRoutes.includes(route.name))
</script>

<template>

<header v-if="!shouldHideLayout">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid d-flex justify-content-between align-items-center mx-5">

        <!-- Logo (Left) -->
        <router-link class="navbar-brand" to="/home"><h1><img src="../assets/Ellipse 6.svg"/>Moon</h1></router-link>

        <!-- Toggler for small screens -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navclose">
        <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapsible Nav -->
        <div class="collapse navbar-collapse justify-content-between" id="navclose">

        <!-- Centered Nav Links -->
        <ul class="navbar-nav mx-auto d-flex flex-row gap-4">
            <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/shop">Shop</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/About">About</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
        </ul>

        <!-- Right Side Icons -->
        <ul class="navbar-nav d-flex flex-row gap-3">
            <li class="nav-item">
            <router-link class="nav-link" to="#"><img src="../assets/Search.svg" /></router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/profile"><img src="../assets/Avatar.svg" /></router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/fav"><img src="../assets/Heart.svg" /></router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/cart"><img src="../assets/Vector.svg" /></router-link>
            </li>
        </ul>

        </div>
    </div>
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
