<script setup>
import { useRouter } from 'vue-router'
</script>

<template>
  <!-- Section 1 -->
   <section class="section1-bg w-100 d-flex justify-content-center">
    <div class="d-flex justify-content-start w-75">
        <div class="section1-content d-flex justify-content-center align-items-center align-content-center ">

            <!-- icon with text-->
            <div class="text-center">
                <div class="mb-3 border-bottom border-white border-1 pb-4">
                    <img src="../assets/contact-moon-icon.png" alt="moon icon" class="img-fluid mb-4 ">
                    <p class="contact-text h1 text-white ">CONTACT US</p>
                </div>

                <!-- text with links-->

                <div class="mt-4">
                    <p class="text-white fw-medium ">Follow us on social media</p>
                </div>

                <div class="d-flex justify-content-evenly">
                    <a href="#"><img src="../assets/contact-facebook.svg" alt="facebook icon"></a>
                    <a href="#"><img src="../assets/contact-twitter.svg" alt="twitter icon"></a>
                    <a href="#"><img src="../assets/contact-instagram.svg" alt="instagram icon"></a>
                    <a href="#"><img src="../assets/contact-linkedIn.svg" alt="linkedin icon"></a>
                    <a href="#"><img src="../assets/contact-youtube.svg" alt="youtube icon"></a>
                </div>
            </div>
        </div>
    </div>
   </section>

   <!-- Section 2 -->

   <section class="d-flex justify-content-center align-items-center align-content-center mt-5">
    <!-- contact information text -->
     <div class="text-center w-50">
        <h1>GET IN TOUCH WITH US </h1>
        <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quod excepturi labore esse placeat dolorum reprehenderit, ullam ipsam sint veniam?</p>
        
        <div class="pt-4">
            <p class="text-secondary fw-medium mb-0">Office Hours :</p>
            <p class="fw-medium pb-3" style="color: #C69B7B;">Monday - Friday 8:00 am to 5:00 pm</p>

            <p class="text-secondary fw-medium mb-0">Email :</p>
            <p class="fw-medium pb-3" style="color: #C69B7B;">contact@company.com</p>

            <p class="text-secondary fw-medium mb-0">Phone :</p>
            <p class="fw-medium pb-3" style="color: #C69B7B;">(414) 687-5892</p>
            
            <p class="text-secondary fw-medium mb-0">Location :</p>
            <p class="fw-medium mb-0" style="color: #C69B7B;">59 Middle Point Rd</p>
            <p class="fw-medium pb-3" style="color: #C69B7B;">San Francisco, 80412</p>
        </div>
    </div>

    <!-- Section 2 - Form-->
    <div>
        <form>
            
        </form>
    </div>
   </section>

   <!-- Section 3 -->

    <section>

    </section>
    
</template>

<style scoped>
.section1-bg{
    background-image: url("../assets/contact-section1-background.svg");
    background-size: cover;
    background-position: center;
    height: 540px;
    
}

.section1-content{
    background-color: #3A3845;
    height: 540px;
    width: 420px;
}

.contact-text{
    color: #FFFDFB;
    font-family: 'Garamond', Courier, monospace;
}
</style>
