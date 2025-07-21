<script>
import { useRouter } from 'vue-router'
import productCard from "../components/homepage-card.vue"
import Homepage19 from "../assets/Homepage19.jpg";
import Homepage20 from "../assets/Homepage20.jpg";
import Homepage21 from "../assets/Homepage21.jpg";
import Homepage22 from "../assets/Homepage22.jpg";

export default {
  components: { productCard },
  data() {
    return {
      quantity: 1,
      min: 1,
      selectedColorIndex: null,
    sec6Cards : [
  {
    image: Homepage19,
    title: "Porcelain Dinner Plate",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage20,
    title: "Ophelia Matte Natural  Vase",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage21,
    title: "Porcelain Dinner Plate",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
  {
    image: Homepage22,
    title: "Luana Bowl",
    price: "$49.00",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  },
]
    };

  },
  methods: {
    increase() {
        this.quantity++;
    },
    decrease() {
      if (this.quantity > this.min) {
        this.quantity--;
      }
    },
    selectColor(index) {
      this.selectedColorIndex = index;
    }

  },

  
};

</script>

<template>
    <!-- Section 1 -->
     <section class="font-inter mx-5">
        <div class="row g-2">
            <!-- Left Side -->
            <div class="col-12 col-sm-9 col-md-6 ms-md-5 ">
                <div class="col-md-9 ms-md-5 mx-md-2 mx-0 px-0"> 
                      <!-- Breadcrumb -->
                      <div class="breadcrumb-links mt-3">
                          <nav aria-label="breadcrumb" class="w-100">
                            <ol class="breadcrumb text-center text-md-end mb-0 ms-4 ms-md-0">
                                <li class="breadcrumb-item">
                                  <router-link to="/home" class="text-secondary">Home</router-link>
                                </li>

                                <li class="breadcrumb-item">
                                  <router-link to="/shop" class="text-secondary">Shop</router-link>
                                </li>

                                <li class="text-moon breadcrumb-item active" aria-current="page" style="letter-spacing: 1.5px; word-spacing: 1px;">
                                  Marin White Dinner Plate
                                </li>
                            </ol>
                          </nav>
                      </div>

                    <!-- Big plate picture -->
                    <div class="container mt-5 px-3 px-md-0">
                      <img src="../assets/products-big-plate.svg" alt="big blue plate" class="big-plate img-fluid d-block">

                      <!-- Thumbnails -->
                      <div class="container d-block mt-4 mb-md-0 px-0">
                        <nav class="d-flex justify-content-center justify-content-lg-end gap-2 flex-lg-nowrap w-100">
                          <img src="../assets/products-choose-1.svg" alt="product 1" class="img-fluid" />
                          <img src="../assets/products-choose-2.svg" alt="product 2" class="img-fluid" />
                          <img src="../assets/products-choose-3.svg" alt="product 3" class="img-fluid" />
                          <img src="../assets/products-choose-4.svg" alt="product 4" class="img-fluid" />
                          <img src="../assets/products-choose-5.svg" alt="product 5" class="img-fluid" />
                        </nav>
                      </div>
                    </div>
              </div>
            </div>          


            <!-- Right Side -->
            <div class="col-12 col-sm-9 col-md-5 ">
               <div class="container container-content">
                    <div class="container">
                        <h5 class="text-moon font-inter fw-semibold">MARIN WHITE DINNER PLATE</h5>

                        <div class="d-flex flex-wrap gap-2 mt-1">
                            <img src="../assets/products-star.svg" alt="star rate" class="mb-3">
                            <p class="fs-6">(1256 Reviews)</p>
                            <p class="ms-4" style="color: #C69B7B;"><span class="text-moon">Stock: </span> In Stock</p>
                        </div>

                        <div class="text-spacing d-flex flex-wrap gap-4 fs-4">
                            <p class="text-moon">$35</p>
                            <p style="color: #9CA3AF;">$50</p>
                        </div>
                    </div>

                    <div class="container mt-3 fw-medium">
                        <p class="fw-bold" style="color: #826F66;"><span class="text-moon">Color: </span>Blue</p>

                        <div>
                            <nav class="d-flex flex-wrap gap-3">
                                <div style="background-color: #A1B8BE;" class="color-box border border-2" :class="{ active: selectedColorIndex === 0 }"@click="selectColor(0)"></div>
                                <div class="color-box bg-white border border-2" :class="{ active: selectedColorIndex === 1 }"@click="selectColor(1)"></div>
                                <div style="background-color: #C88242;" class="color-box border border-2" :class="{ active: selectedColorIndex === 2 }"@click="selectColor(2)"></div>
                                <div style="background-color: #212F39;" class="color-box border border-2" :class="{ active: selectedColorIndex === 3 }"@click="selectColor(3)"></div>
                                <div style="background-color: #DCB9A8;" class="color-box border border-2" :class="{ active: selectedColorIndex === 4 }"@click="selectColor(4)"></div>
                                <div style="background-color: #A7B2A3;" class="color-box border border-2" :class="{ active: selectedColorIndex === 5 }"@click="selectColor(5)"></div>
                            </nav>
                        </div>
                    </div>
                    
                    <!-- Buttons Section -->
                    <div class="row mt-5">
                        <div class="col-8 ms-2 col-lg-11 col-md-9 ms-md-2">
                            <!-- quantity - add to cart -->
                            <div class="d-flex gap-2 mb-2 align-items-stretch ">

                                <!-- Quantity Button -->
                                <div class="product-button d-inline-flex align-items-center px-3 py-1">
                                    <svg @click="decrease" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg me-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/></svg>

                                    <p class="quantity-output text-center my-2 fw-medium">{{ quantity }}</p>

                                    <svg @click="increase" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg ms-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>
                                </div>

                                <!-- Add to Cart Button -->
                                <button class="btn bg-moon text-white fw-medium rounded-0 px-4 w-100 py-1" style="font-size: 14px; letter-spacing: 1px;">ADD TO CART</button>

                            </div>

                            <!-- Buy Now - Heart -->
                            <div class="d-flex gap-2 mt-2">
                                <button class="btn product-button fw-semibold text-moon w-100 rounded-0 py-2" style="font-size: 14px; letter-spacing: 0.5px;">BUY NOW</button>

                                <button class="btn product-button rounded-0 d-flex align-items-center justify-content-center py-2">
                                    <img src="../assets/Heart.svg" alt="heart icon" width="20" height="20">
                                </button>
                            </div>

                            <!-- Share links -->

                            <div class="font-inter mt-4 mb-5">
                                <p class="text-moon fw-semibold">Share this:</p>
                                <nav class="d-flex flex-wrap gap-4 mt-2">
                                    <a href="#"><img src="../assets/products-facebook.svg" alt="facebook icon"></a>
                                    <a href="#"><img src="../assets/products-twitter.svg" alt="twitter icon"></a>
                                    <a href="#"><img src="../assets/products-instagram.svg" alt="instagram icon"></a>
                                    <a href="#"><img src="../assets/products-linkedln.svg" alt="linkedin icon"></a>
                                </nav>
                            </div>

                            <!-- list group -->
                            <ul class="list-group border-1 mt-5">
                                <li class="list-group-item d-flex justify-content-between align-items-start border-start-0 border-end-0 border rounded-0 py-3">
                                        
                                    <div class="text-moon fw-semibold">Details</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg ms-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-start border-start-0 border-end-0 border rounded-0 py-3">
                                    <div class="me-auto">
                                        <div class="text-moon fw-semibold">Dimentions</div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg ms-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-start border-start-0 border-end-0 border rounded-0 py-3">
                                    <div class="me-auto">
                                        <div class="text-moon fw-semibold">Reviews</div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg ms-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        <!-- Grid Finishes -->
        <!-- Simiral Item -->

        <div class="mx-5 my-5">
          <h1 class="fw-bold lh-lg my-5 text-moon font-garamond mb-5 gap-3 ms-5">SIMILAR ITEMS</h1>
          <div class="d-flex flex-row">
            <div class="col-md-2 d-block mx-5" v-for="(card, index) in sec6Cards" :key="index">
                <productCard
                  :image="card.image"
                  :title="card.title"
                  :price="card.price"
                  :description="card.description"
                />
            </div>
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

.text-spacing{
    letter-spacing: 1px;
}

.color-box {
    height: 36px;
    width: 36px;
    border-color: #D1D5DB;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.color-box.active {
    transform: scale(1.3);

}

.quantity-output{
    width: 60px;
    color: #3A3845;
}
.quantity-output::selection{
    color: #3A3845;
    
}

.product-button{
    border: #3A3845 solid 1.5px;
}

.breadcrumb-item a {
  text-decoration: none;
}

.container-content{
    height: 750px;
    width: 550px;
    margin-top: 100px;
    margin-left: 0px;
}

.big-plate{
    
}

.outer-container {
  width: 100%;
  min-height: 40svh;
}
</style>

