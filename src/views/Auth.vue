<script setup>
import { useRouter } from 'vue-router'
</script>

<template>
  <section>
      <div class="row">
        <!-- left page Moon background photo-->
        <div class="col-6">
          <img src="../assets/Auth-background.png" alt="Moon Background" class="img-fluid">
        </div>

        <!-- Right page welcoming-->
        <div class="col-6">
          <div class="container text-center justify-content-center align-items-center">
            <h3>Welcome Back!</h3>
            <h5>Enter you Credentials to access your account</h5>

            <!-- Login From -->

            <form class="mt-4">
              <label for="email-input" class="form-label">Email</label>
              <input type="email" id="email-input" name="email" class="form-control">
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>

</style>
