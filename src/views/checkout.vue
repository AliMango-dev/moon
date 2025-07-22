<script setup>
import { useRouter } from 'vue-router'
</script>

<template>
  <div class="container py-5">
    <div class="row">
      <!-- Left side form -->
      <div class="col-lg-8">
        <form>
          <div class="row mb-4">
            <div class="col-12 col-md-6">
              <label class="form-label">First Name *</label>
              <input type="text" class="form-control" placeholder="Samantha" />
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label">Last Name *</label>
              <input type="text" class="form-control" placeholder="Clarken" />
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-12 col-md-6">
              <label class="form-label">Company</label>
              <input type="text" class="form-control" placeholder="Moon" />
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label">Country</label>
              <select class="form-select">
                <option selected>United States</option>
              </select>
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label">Street address *</label>
            <input type="text" class="form-control" placeholder="Address" />
          </div>

          <div class="mb-4">
            <label class="form-label">City *</label>
            <input type="text" class="form-control" placeholder="City" />
          </div>

          <div class="mb-4">
            <label class="form-label">Phone *</label>
            <input type="text" class="form-control" placeholder="(123) 456 - 7890" />
          </div>

          <div class="mb-4">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="example@youremail.com" />
          </div>

          <div class="mb-4">
            <label for="notes" class="form-label">Order Notes</label>
            <textarea class="form-control" rows="3" placeholder="Type your message here..." style="resize: none;"></textarea>
          </div>

          <div class="row">
            <div class="col-12 col-md-6 mb-3">
              <button type="submit" class="btn w-100">
                <img src="../assets/CH.svg" /> RETURN TO CART
              </button>
            </div>
            <div class="col-12 col-md-6 mb-3">
              <button type="submit" class="btn btn-dark w-100">
                Continue to Shipping <img src="../assets/contact-arrow-icon.svg" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- Right side summary -->
      <div class="col-lg-4 mt-5 mt-lg-0">
        <!-- Order Summary -->
        <div class="card w-100 mb-4">
          <div class="d-flex justify-content-between border-bottom mb-4">
            <h5>Product</h5>
            <strong>Subtotal</strong>
          </div>

          <ul class="list-unstyled mb-4">
            <li class="d-flex justify-content-between">Porcelain Dinner Plate <span>$59.00</span></li>
            <li class="d-flex justify-content-between">Ophelia Vase <span>$168.00</span></li>
            <li class="d-flex justify-content-between">Luana Bowl <span>$49.00</span></li>
          </ul>

          <hr class="border-light" />
          <div class="d-flex justify-content-between">
            <strong>Subtotal</strong>
            <span>$475.00</span>
          </div>
          <div class="d-flex justify-content-between">
            <strong>Shipping</strong>
            <span>$15.00</span>
          </div>
          <hr class="border-light" />
          <div class="d-flex justify-content-between mt-2 border-top mb-4 pt-2">
            <strong>Total</strong>
            <strong>$490.00</strong>
          </div>
        </div>

        <!-- Payment -->
        <div class="card w-100 text-white mb-4" style="background-color: #3A3845;">
          <div class="p-4">
            <h5 class="mb-3">Payment</h5>

            <div class="form-check d-flex align-items-center justify-content-between">
              <div>
                <input class="form-check-input me-2" type="radio" checked />
                <label class="form-check-label">Credit card</label>
              </div>
              <img src="../assets/card.svg" />
            </div>

            <hr />

            <div class="mb-3 mt-2">
              <input type="text" class="form-control bg-transparent text-white" value="Card number" style="color: #A6A6A8;" />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control bg-transparent text-white" value="Name on card" style="color: #A6A6A8;" />
            </div>

            <div class="row">
              <div class="col">
                <input type="text" class="form-control bg-transparent text-white" value="Expiration date" style="color: #A6A6A8;" />
              </div>
              <div class="col">
                <input type="text" class="form-control bg-transparent text-white" value="security code" style="color: #A6A6A8;" />
              </div>
            </div>

            <hr />

            <div class="form-check mt-3">
              <input class="form-check-input" type="radio" name="paymentMethod" id="paypal" />
              <label class="form-check-label" for="paypal">
                <img src="../assets/paypal.svg" />
              </label>
            </div>

            <button class="btn btn-outline-light mt-3 w-100">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
    font-family: 'Garamound'
}
</style>
