<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const hideLayoutRoutes = ['Authentication']
const shouldHideLayout = computed(() => hideLayoutRoutes.includes(route.name))
</script>

<template>
  <!-- Header -->
  <header v-if="!shouldHideLayout">
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/home">
          <img src="../assets/Ellipse 6.svg" alt="Logo" height="40" />
        </router-link>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navclose"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Items -->
        <div class="collapse navbar-collapse" id="navclose">
          <!-- Center -->
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop">Shop</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>

          <!-- Right -->
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

  <!-- Main Content -->
  <main>
    <slot />
  </main>

  <!-- Footer -->
  <footer v-if="!shouldHideLayout" style="background-color: #3A3845; color: #CAC9CF;">
    <div class="container py-5">
      <div class="row">
        <!-- Left Column -->
        <div class="col-lg-6 mb-4 mb-lg-0 border-end">
          <img src="../assets/logo.svg" class="img-fluid mb-3" />
          <p style="color: #E5E5E5;">
            Lorem ipsum dolor sit amet consectetur <br />
            adipiscing elit aliquam mauris sed ma
          </p>
          <button class="btn btn-outline-light d-flex align-items-center gap-2 mt-3">
            Get Started
            <img src="../assets/contact-arrow-icon.svg" />
          </button>
        </div>

        <!-- Footer Links -->
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <h5 class="text-uppercase">About us</h5>
          <ul class="list-unstyled mt-3">
            <li><router-link class="nav-link">Mission</router-link></li>
            <li><router-link class="nav-link">Our team</router-link></li>
            <li><router-link class="nav-link">Awards</router-link></li>
            <li><router-link class="nav-link">Testimonials</router-link></li>
            <li><router-link class="nav-link">Privacy policy</router-link></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <h5 class="text-uppercase">Services</h5>
          <ul class="list-unstyled mt-3">
            <li><router-link class="nav-link">Web design</router-link></li>
            <li><router-link class="nav-link">Web development</router-link></li>
            <li><router-link class="nav-link">Mobile design</router-link></li>
            <li><router-link class="nav-link">UI/UX design</router-link></li>
            <li><router-link class="nav-link">Branding design</router-link></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <h5 class="text-uppercase">Portfolio</h5>
          <ul class="list-unstyled mt-3">
            <li><router-link class="nav-link">Corporate websites</router-link></li>
            <li><router-link class="nav-link">E-commerce</router-link></li>
            <li><router-link class="nav-link">Mobile apps</router-link></li>
            <li><router-link class="nav-link">Landing pages</router-link></li>
            <li><router-link class="nav-link">UI/UX projects</router-link></li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center pt-4 border-top mt-4">
        <small>
          Copyright © 2023 Moon | All Rights Reserved |
          <router-link class="nav-link d-inline mx-1">
            <span style="text-decoration: underline;">Terms and Conditions</span>
          </router-link>
          |
          <router-link class="nav-link d-inline mx-1">
            <span style="text-decoration: underline;">Privacy policy</span>
          </router-link>
        </small>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer li {
  margin-bottom: 12px;
}
</style>
