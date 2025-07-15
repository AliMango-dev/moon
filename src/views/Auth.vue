<script >
import { useRouter } from 'vue-router'

export default{
  data(){
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<template>
  <section class="container-fluid h-100">
    <div class="row h-100">
      
      <!-- Left Side with Background Image -->
      <div class="col-md-6 d-none d-md-block p-0">
        <img src="../assets/Auth-background.png" alt="Moon Background" class="img-fluid w-100 h-100 object-fit-cover">
      </div>

      <!-- Right Side: Login -->
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <div class="w-75">

            <!-- Welcome Text -->
            <div class="text-center mb-5">
              <h1 class="h2">Welcome Back!</h1>
              <p class="h4">Enter your Credentials to access your account</p>
            </div>

            <!-- Login Form -->
             <div class="container ">
              <form @submit.prevent="handelLogin" class="w-75 mx-auto ">
                <div class="mb-3">
                  <label for="email" class="form-label h5">Email address</label>
                  <input :v-model="email" type="email" class="form-control" id="email">
                </div>

                <div class="mb-2 d-flex justify-content-between align-items-center">
                  <label for="password" class="form-label mb-0 h5">Password</label>
                  <a href="#" class="text-decoration-none fw-bold" style="color: #0C2A92;"><sup>forgot password</sup></a>
                </div>
                <div class="mb-3">
                  <input :v-model="password" type="password" class="form-control" id="password">
                </div>

                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" id="remember" name="remember">
                  <label class="form-check-label" for="remember"> Remember Me</label>
                </div>

                
                <router-link to="/home">
                  <button type="submit" class="btn w-100 fw-bold text-white mb-4" style="background-color: #3A3845;">Login</button>
                </router-link>

                <a class="btn btn-white border w-100 d-flex align-items-center justify-content-center gap-2 mb-3 fw-medium">
                  <img src="../assets/Auth-google-logo.png" alt="Google" height="20">
                  Sign in with Google
                </a>

                <div class="text-center">
                  <small class="fw-medium">Don't have an account? <a href="#" class="fw-bold text-decoration-none" style="color: #0F3DDE;">Sign Up</a></small>
                </div>
              </form>
             </div>
            

          </div>
        </div>

    </div>
  </section>
</template>

<style scoped>

</style>
