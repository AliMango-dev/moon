<template>
  <section class="container-fluid min-vh-100">
    <div class="row flex-column flex-md-row h-100">
      <!-- Background Image -->
      <div class="col-12 col-md-6 p-0">
        <img
          src="../assets/Auth-background.png"
          alt="Moon Background"
          class="img-fluid w-100 h-100 object-fit-cover"
          style="min-height: 250px"
        />
      </div>

      <!-- Sign Up Section -->
      <div class="col-12 col-md-6 d-flex align-items-center justify-content-center py-5">
        <div class="w-100 px-4" style="max-width: 500px">
          <!-- Welcome Text -->
          <div class="text-center mb-4">
            <h1 class="h3">Create Your Account</h1>
            <p class="h5">Fill the details below to sign up</p>
          </div>

          <!-- Sign Up Form -->
          <form @submit.prevent="handleSignup">
            <!-- First Name -->
            <div class="mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input
                v-model="firstName"
                type="text"
                class="form-control"
                id="firstName"
                required
              />
            </div>

            <!-- Last Name -->
            <div class="mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input
                v-model="lastName"
                type="text"
                class="form-control"
                id="lastName"
                required
              />
            </div>

            <!-- Phone Number -->
            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input
                v-model="phone"
                type="tel"
                class="form-control"
                id="phone"
                placeholder="+966 5xxxxxxxx"
                required
              />
            </div>

            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                required
              />
            </div>

            <!-- Password -->
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                required
              />
            </div>

            <!-- Confirm Password -->
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input
                v-model="confirmPassword"
                type="password"
                class="form-control"
                id="confirmPassword"
                required
              />
            </div>

            <!-- Sign Up Button -->
            <button
              type="submit"
              class="btn w-100 fw-bold text-white mb-3"
              style="background-color: #3a3845"
            >
              Sign Up
            </button>

            <!-- Google Sign Up -->
            <button
              type="button"
              class="btn btn-white border w-100 d-flex align-items-center justify-content-center gap-2 mb-3 fw-medium"
            >
              <img
                src="../assets/Auth-google-logo.png"
                alt="Google"
                height="20"
              />
              Sign up with Google
            </button>

            <!-- Switch to login -->
            <div class="text-center">
              <small class="fw-medium">
                Already have an account?
                <router-link
                  to="/"
                  class="fw-bold text-decoration-none text-primary"
                >
                  Login
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
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
}
</script>

<style scoped>
img.object-fit-cover {
  object-fit: cover;
  object-position: center;
}
</style>
