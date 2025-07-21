<script setup>
import { ref } from 'vue'
import ProductComponent from '../components/ProductComponent.vue'
import hp19 from '../assets/Homepage19.jpg'
import hp20 from '../assets/Homepage20.jpg'
import hp21 from '../assets/Homepage21.jpg'

    const products = ref([
    {
        id: 1,
        name: "PORCELAIN DINNER PLATE (27CM)",
        price: 19,
        quantity: 2,
        image: hp19
    },
    {
        id: 2,
        name: "OPHELIA MATTE NATURAL VASE",
        price: 168,
        quantity: 1,
        image: hp20
    },
    {
        id: 3,
        name: "PORCELAIN DINNER PLATE",
        price: 70,
        quantity: 1,
        image: hp21
    }
    ])

    const increase = index => products.value[index].quantity++
    const decrease = index => {
    if (products.value[index].quantity > 1) products.value[index].quantity--
    }
    const remove = index => products.value.splice(index, 1)
    </script>

    <template>
    <div class="container">
        <nav aria-label="breadcrumb" style="margin-top: 20px; margin-bottom: 50px;">
        <ol class="breadcrumb bg-transparent px-0">
        <li class="breadcrumb-item">
            <router-link to="/home" class="text-muted text-decoration-none">Home</router-link>
        </li>
        <li class="breadcrumb-item active text-dark" aria-current="page">Shopping Cart</li>
        </ol>
    </nav>
        <h5 class="fw-semibold" style="margin-bottom: 40px;">Cart ({{ products.length }} item)</h5>

        <div class="table-responsive">
        <table class="table align-middle">
            <thead>
            <tr>
                <th><img src="../assets/Trash.svg"></th>
                <th>PHOTO</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
            </tr>
            </thead>
            <tbody>
            <ProductComponent
                v-for="(product, index) in products"
                :key="product.id"
                :product="product"
                :index="index"
                @increase="increase"
                @decrease="decrease"
                @remove="remove"
            />
            </tbody>
        </table>
        </div>
        <div class="row my-4">

    <div class="col-md-6 mb-3">
        <div class="d-flex flex-column flex-md-row align-items-stretch" style="width: 100%;">
        <input type="text" class="form-control border-dark w-lg-15 w-md-100" placeholder="Coupon code">
        <button class="btn text-white w-lg-30 w-md-100 ms-lg-1 mt-sm-2 mt-lg-0" style="background-color: #3A3845;">APPLY COUPON</button>
        </div>
    </div>


    <div class="col-md-6 text-md-end">
        <div class="d-grid d-md-flex justify-content-md-end">
        <button class="btn text-white w-lg-20 w-md-100" style="background-color: #3A3845;">UPDATE CART</button>
        </div>
    </div>
    </div>


    <div class="row justify-content-end mb-5">
    <div class="col-md-4">
        <div class="border p-4" style="background-color: #3A3845; color: #FFFFFF;">
        <h6 class="mb-3 fw-semibold">Cart totals</h6>
        <div class="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span class="fw-semibold">$498.00</span>
        </div>
        <div class="d-flex justify-content-between">
            <span>Cart totals</span>
            <span class="fw-semibold">$500.00</span>
        </div>
        <router-link to="/checkout" class="btn btn-outline-light w-100 mt-3" style="">
            PROCEED TO CHECKOUT
        </router-link>
        </div>
    </div>
</div>


    </div>
    
</template>

<style scoped>
th{
    background-color: #3A3845;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 14px;
}

@media (min-width: 768px) {
    .w-md-10 { width: 10%!important; }
    .w-md-15 { width: 15%!important; }
    .w-md-100 { width: 100%!important; }
}

@media (min-width: 992px) {
    .w-lg-10 { width: 10%!important; }
    .w-lg-15 { width: 55%!important; }
    .w-lg-20 { width: 20%!important; }
    .w-lg-30 { width: 40%!important; }
}
</style>