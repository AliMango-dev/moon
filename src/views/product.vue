<script setup>
import { useRouter } from 'vue-router'
</script>

<template>

    <!-- Section 1 -->
     <section>
        <!-- Breadcrumb link tabs -->
        <div class="row g-2">
            <div class="col-sm-9 col-md-6 d-md-flex justify-content-center align-items-center align-content-center">
                <div class="container d-block ms-5">
                    <div class="breadcrumb-links container mt-3 mb-5">
                        <nav aria-label="breadcrumb text-secondary text-decoration-none">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/home">Home</router-link></li>
                                <li class="breadcrumb-item"><router-link to="/shop">Shop</router-link></li>
                                <li class="tab-active breadcrumb-item active" aria-current="page">Marin White Dinner Plate</li>
                            </ol>
                        </nav>
                    </div>

                    <!-- Big plate pictures-->
                    <div class="container">
                        <img src="../assets/products-big-plate.svg" alt="big blue plate" class="img-fluid h-100 w-75 ">
                        <div class="container d-flex flex-wrap gap-5">
                            <nav>
                                <img src="../assets/products-choose-1.svg" alt="product 1">
                                <img src="../assets/products-choose-2.svg" alt="product 2">
                                <img src="../assets/products-choose-3.svg" alt="product 3">
                                <img src="../assets/products-choose-4.svg" alt="product 4">
                                <img src="../assets/products-choose-5.svg" alt="product 5">
                            </nav>
                        </div>
                    </div>


                </div>
            </div>

            <div class="col-sm-9 col-md-6 d-md-flex justify-content-center align-items-center align-content-center">
                Column
            </div>
        </div>
     </section>
    
    
</template>

<style scoped>
.breadcrumb-links {
    color: #807F86;
    text-decoration: none;
}

.tab-active{
    color: #3A3845;
}
</style>
