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
                <textarea class="form-control" id="notes" rows="3" placeholder="Type your message here..."></textarea>
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
            <div class="card p-4 bg-dark text-white">
    <h5>Product</h5>
    <ul class="list-unstyled">
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
    <div class="d-flex justify-content-between mt-2">
        <strong>Total</strong>
        <strong>$490.00</strong>
    </div>

    <hr class="border-light">

    <h5 class="mt-3">Payment</h5>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="paymentMethod" id="creditCard" checked>
        <label class="form-check-label" for="creditCard">Credit card</label>
    </div>

    <div class="mb-3 mt-2">
        <input type="text" class="form-control" placeholder="Card number">
    </div>
    <div class="mb-3">
        <input type="text" class="form-control" placeholder="Name on card">
    </div>
    <div class="row">
        <div class="col">
        <input type="text" class="form-control" placeholder="MM/YY">
        </div>
        <div class="col">
        <input type="text" class="form-control" placeholder="CVV">
        </div>
    </div>

    <div class="form-check mt-3">
        <input class="form-check-input" type="radio" name="paymentMethod" id="paypal">
        <label class="form-check-label" for="paypal">PayPal</label>
    </div>

    <button class="btn btn-light mt-3 w-100">Place Order</button>
    </div>

        </div>
    </div>
</div>

</template>

<style scoped>

</style>
