<script setup>
import {useRouter} from "vue-router";
</script>

<template>
    <!-- section 1 -->
    <div class="text-center my-5 sec1">
        <h2>ABOUT MOON</h2>
        <p>
        Moon's handmade ceramic products have been around <br />
        since 1650, let's explore our journey
        </p>
    </div>

    <!-- section 2-->
    <div class="container " style="width: 1134px">

        <div class="d-flex flex-row align-items-center sec2">
            <div class="firstrow">
            <h2>1910</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipiscing eli <br />
                mattis sit phasellus mollis sit aliquam sit nullam neque
                <br />ultrices.
            </p>
            </div>

            <div>
            <img class="img1" src="../assets/About1.png" />
            </div>
        </div>

        <div class="d-flex flex-row align-items-center sec2">
            <div>
            <img class="img1" src="../assets/About2.jpg" />
            </div>
            <div class="firstrow">
            <h2>1910</h2>
            <p>
                Maecenas sem eros, rutrum vitae risus eget, vulputate<br>aliquam nisi. dolor sit amet consectetur adipiscing eli <br> mattis sit phasellus mollis sit aliquam sit 
            </p>
            </div>
        
        </div>

        <div class="d-flex flex-row align-items-center sec2">
            
            <div class="firstrow">
            <h2>2010</h2>
            <p>
                Rutrum vitae risus eget, vulputate aliquam nisi ex gravida<br>neque tempus. sit aliquam sit nullam neque ultrices
            </p>
            </div>
            <div>
            <img class="img1" src="../assets/About3.png" />
            </div>
        
        </div>
    </div>

    <!-- section 3 -->
    <div class="container " style="width: 1134px;">
        <div class="d-flex flex-row align-items-center mt-5 sec2">

            <div style="width: 555px; height: 443px; overflow: hidden;">
            <img class="img2" src="../assets/About4.png" />
            </div>

            <div class="secondrow mx-5">
            <h2 class=" mb-5 title">How we works</h2>
            <p class="semtitle">
                Product design
            </p>

            <p class="semnot">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.
            </p>

            <p class="semtitle">
                Crafted
            </p>

            <p class="semnot">
                Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.
            </p>

            <p class="semtitle">
                Sell product
            </p>

            <p class="semnot">
                Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.
            </p>
            </div>
            
        
        </div>
        </div>

        <div>
            e
        </div>
    
</template>

<style scoped>
    .sec1 h2 {
    font-weight: 700;
    font-family: "Garamond", sans-serif;
    font-size: 36px;
    color: #3a3845;
    }

    .sec1 p {
    font-weight: 400;
    font-family: "inter", sans-serif;
    font-size: 16px;
    color: #595667;
    }

    .sec2 .img1 {
    width: 555px;
    height: 348px;
    }

    .firstrow {
    background-color: #f7f6f5;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 555px;
    height: 348px;
    }

    .firstrow h2 {
    font-weight: 700;
    font-family: "Garamond", sans-serif;
    font-size: 36px;
    color: #3a3845;
    }

    .firstrow p {
    font-weight: 400;
    font-family: "inter", sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #595667;
    }

    .sec2 .img2{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    display: block;
    }

    .secondrow .semtitle {
        font-weight: 600;
        font-size: 18px;
        font-family: "Garamond", sans-serif;

    }

    .secondrow .semnot {
        font-weight: 400;
        font-size: 16px;
        
    }
</style>
