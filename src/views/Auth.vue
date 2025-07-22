<template>
  <section class="container-fluid min-vh-100">
    <div class="row flex-column flex-md-row h-100">
      <!-- Background Image: Always visible -->
      <div class="col-12 col-md-6 p-0">
        <img
          src="../assets/Auth-background.png"
          alt="Moon Background"
          class="img-fluid w-100 h-100 object-fit-cover"
          style="min-height: 250px"
        />
      </div>

      <!-- Login Section -->
      <div class="col-12 col-md-6 d-flex align-items-center justify-content-center py-5">
        <div class="w-100 px-4" style="max-width: 500px">
          <!-- Welcome Text -->
          <div class="text-center mb-4">
            <h1 class="h3">Welcome Back!</h1>
            <p class="h5">Enter your credentials to access your account</p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handelLogin">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                :v-model="email"
                type="email"
                class="form-control"
                id="email"
              />
            </div>

            <div class="mb-2 d-flex justify-content-between align-items-center">
              <label for="password" class="form-label mb-0">Password</label>
              <a href="#" class="text-decoration-none fw-bold text-primary">
                <sup>Forgot password?</sup>
              </a>
            </div>

            <div class="mb-3">
              <input
                :v-model="password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>

            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                id="remember"
                name="remember"
              />
              <label class="form-check-label" for="remember">
                Remember Me
              </label>
            </div>

            <router-link to="/home">
              <button
                type="submit"
                class="btn w-100 fw-bold text-white mb-3"
                style="background-color: #3a3845"
              >
                Login
              </button>
            </router-link>

            <a
              class="btn btn-white border w-100 d-flex align-items-center justify-content-center gap-2 mb-3 fw-medium"
            >
              <img
                src="../assets/Auth-google-logo.png"
                alt="Google"
                height="20"
              />
              Sign in with Google
            </a>

            <div class="text-center">
              <small class="fw-medium">
                Don't have an account?
                <router-link
                  to="/signup"
                  class="fw-bold text-decoration-none text-primary"
                >
                  Sign Up
                </router-link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import signup from './signup.vue';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  components: signup
};


</script>

<style scoped>
img.object-fit-cover {
  object-fit: cover;
  object-position: center;
}
</style>
