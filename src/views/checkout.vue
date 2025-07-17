<script setup>
import { useRouter } from 'vue-router'
</script>

<template>
    <div class="container py-5">
    <div class="row">
        
        <div class="col-lg-8">
        <form>
            <div class="row" style="margin-bottom: 30px;">
                <div class="col">
                    <label class="form-label">First Name *</label>
                    <input type="text" class="form-control" placeholder="Samantha">
                </div>

                <div class="col">
                    <label class="form-label">Last Name *</label>
                    <input type="text" class="form-control" placeholder="Clarken">
                </div>
            </div>

            <div class="row" style="margin-bottom: 30px;">
                <div class="col">
                    <label class="form-label">Company</label>
                    <input type="text" class="form-control" placeholder="Moon">
                </div>
                <div class="col">
                    <label class="form-label">Country</label>
                    <select class="form-select">
                        <option selected>United States</option>
                    </select>
                </div>
            </div>

            <div style="margin-bottom: 30px;">
                <label class="form-label">Street address *</label>
                <input type="text" class="form-control" placeholder="Address">
            </div>

            <div style="margin-bottom: 30px;">
                <label class="form-label">City *</label>
                <input type="text" class="form-control" placeholder="City">
            </div>

            <div style="margin-bottom: 30px;">
                <label class="form-label">Phone *</label>
                <input type="text" class="form-control" placeholder="(123) 456 - 7890">
            </div>

            <div style="margin-bottom: 30px;">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="example@youremail.com">
            </div>

            <div style="margin-bottom: 30px;">
                <label for="notes" class="form-label">Order Notes</label>
                <textarea class="form-control" rows="3" placeholder="Type your message here..." style="resize: none;"></textarea>
            </div>
            <div class="row">
                <div class="col">
                    <button type="submit" class="btn "><img src="../assets/CH.svg"> RETURN TO CART</button>
                </div>              
                <div class="col">
                    <button type="submit" class="btn btn-dark w-100">Continue to Shipping <img src="../assets/contact-arrow-icon.svg"></button>
                </div>     
            </div>
            
        </form>

        </div>
        
        <div class="col-lg-4">
            <div class="card" style="width: 416px;">
                <div class="d-flex justify-content-between" style="border-bottom: 1px solid #CAC9CF; margin-bottom: 40px;">
                    <h5>Product</h5>
                    <strong>Subtotal</strong>
                </div>
                
    
        <ul class="list-unstyled" style="margin-bottom: 40px;">
            <li class="d-flex justify-content-between">Porcelain Dinner Plate <span>$59.00</span></li>
            <li class="d-flex justify-content-between">Ophelia Vase <span>$168.00</span></li>
            <li class="d-flex justify-content-between">Luana Bowl <span>$49.00</span></li>
        </ul>
        <hr class="border-light">
        <div class="d-flex justify-content-between">
            <strong>Subtotal</strong>
            <span>$475.00</span>
        </div>
        <div class="d-flex justify-content-between">
            <strong>Shipping</strong>
            <span>$15.00</span>
        </div>
        <hr class="border-light">
        <div class="d-flex justify-content-between mt-2" style="border-top: 1px solid #CAC9CF; margin-bottom: 48px;">
            <strong>Total</strong>
            <strong>$490.00</strong>
        </div>

    <div class="card" style="background-color: #3A3845; width: 416px; color: #FFFFFF;">
        <div style="margin-left: 30px; margin-top: 30px; margin-right: 30px; margin-bottom: 30px;">

        
    <h5 class="mt-3" style="margin-bottom: 20px;">Payment</h5>
    <div class="form-check">
        <input class="form-check-input" type="radio" checked>
        <label class="form-check-label">Credit card </label>
        <img style="margin-left: 165px;" src="../assets/card.svg">
    </div>
    <hr><div></div></hr>

    <div class="mb-3 mt-2 " style="">
        <input type="text" class="form-control bg-transparent" value="Card number" style="color: #A6A6A8;">
    </div>
    <div class="mb-3">
        <input type="text" class="form-control bg-transparent" value="Name on card" style="color: #A6A6A8;">
    </div>
    <div class="row">
        <div class="col">
        <input type="text" class="form-control bg-transparent" value="Expiration date" style="color: #A6A6A8;">
        </div>
        <div class="col">
        <input type="text" class="form-control bg-transparent" value="security code" style="color: #A6A6A8;">
        </div>
    </div>
    <hr><div></div></hr>

    <div class="form-check mt-3">
        <input class="form-check-input" type="radio" name="paymentMethod" id="paypal">
        <label class="form-check-label" for="paypal"><img src="../assets/paypal.svg"></label>
    </div>
    

    <button class="btn btn-outline-light mt-3 w-100 ">Place Order</button>
    </div>
    </div>
            </div>

        </div>
    </div>
</div>

</template>

<style scoped>

</style>
