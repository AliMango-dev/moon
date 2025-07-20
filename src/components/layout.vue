<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const hideLayoutRoutes = ['Authentication']

const shouldHideLayout = computed(() => hideLayoutRoutes.includes(route.name))
</script>

<template>

<header v-if="!shouldHideLayout">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style="border-bottom: 1px solid #CAC9CF;">
    <div class="container-fluid d-flex justify-content-between align-items-center mx-5">

        <!-- Logo -->
        <router-link class="navbar-brand" to="/home"><h1><img src="../assets/Ellipse 6.svg"/></h1></router-link>

        <!-- Toggler menu -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navclose">
        <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Nav -->
        <div class="collapse navbar-collapse justify-content-between" id="navclose">

        <!-- Center Nav Links -->
        <ul class="navbar-nav mx-auto d-flex flex-row gap-5">
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

<footer v-if="!shouldHideLayout" style="background-color: #3A3845; color: #CAC9CF;">
    <!-- Grid container -->
    <div class="container p-4" style="width: 1110px;">
      <!--Grid row-->
      <div class="row justify-content-center">
        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0  " style="border-right: 1px solid #CAC9CF; height: 318px; margin-top: 48px;">
          <img src="../assets/logo.svg">

          <p style="color: #E5E5E5; margin-top: 24px;">
            Lorem ipsum dolor sit amet consectetur <br> adipiscing elit aliquam mauris sed ma
          </p>

          <button class="btn btn-outline-light" style="width: 142px; height: 41px;">Get Started<img src="../assets/contact-arrow-icon.svg"></button>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0 " style="margin-top: 48px;">
          <h5 class="text-uppercase">About us</h5>

          <ul class="list-unstyled mb-0 mt-3">
            <li>
              <router-link class="nav-link">Mission</router-link>
            </li>
            <li>
              <router-link class="nav-link">Our team</router-link>
            </li>
            <li>
              <router-link class="nav-link">Awards</router-link>
            </li>
            <li>
              <router-link class="nav-link">Testimonials</router-link>
            </li>
            <li>
              <router-link class="nav-link">Privacy policy</router-link>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0" style="margin-top: 48px;">
          <h5 class="text-uppercase">Services</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <router-link class="nav-link">Web design</router-link>
            </li>
            <li>
              <router-link  class="nav-link">Web development</router-link>
            </li>
            <li>
              <router-link class="nav-link">Mobile design</router-link>
            </li>
            <li>
              <router-link class="nav-link">UI/UX design</router-link>
            </li>
            <li>
              <router-link class="nav-link">Branding design</router-link>
            </li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-md-0" style="margin-top: 48px;">
          <h5 class="text-uppercase">Portfolio</h5>
          

          <ul class="list-unstyled mb-0">
            
            <li>
              <router-link  class="nav-link">Corporate websites</router-link>
            </li>
            <li>
              <router-link class="nav-link">E-commerce</router-link>
            </li>
            <li>
              <router-link class="nav-link">Mobile apps</router-link>
            </li>
            <li>
              <router-link class="nav-link">Landing pages</router-link>
            </li>
            <li>
              <router-link class="nav-link">UI/UX projects</router-link>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class=" text-center p-3 d-flex justify-content-center" style="border-top: 1px solid #CAC9CF; width: 1110px; margin-left: auto; margin-right: auto;">
      Copyright © 2023 Moon| All Rights Reserved | <router-link class="nav-link mx-1"><span style="text-decoration: underline;">Terms and Conditions</span></router-link>  | <router-link class="nav-link mx-1"><span style="text-decoration: underline;">Privacy policy</span></router-link> 
    </div>
    <!-- Copyright -->
</footer>

</template>

<style scoped>
footer li{
  margin: 24px;
}
</style>
