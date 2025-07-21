<script>
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      edit: false,
      user: {
        firstName: "ABU ABDULADHEEM",
        secondName: "ABU ABDULADHEEM",
        email: "ABU_ABDULADHEEM@gmail.com",
        phone: "+966 55-123-456"
      }
    }
  },
  methods: {
    toggleEdit() {
        this.edit = !this.edit;
    },

    editLabel() {
        if (this.edit === true) {
            return 'Save';
        }
        return 'Edit';
    }
  }
}
</script>

<template>
    <!-- Section 1-->
  <section class="font-inter">
    <div class="row">
        <!-- Left Side -->
        <div class="col-12 col-md-5 col-lg-4 mx-lg-5 mx-lg-5 mt-5 mb-3 rounded-4" style="background-color: #826f66;">
            <div class="d-flex px-lg-4 flex-column justify-content-between h-100">
                <div class="text-moon px-4 px-lg-2 ">
                    <img src="../assets/YM.jpg" alt="profile-icon" class="img-fluid d-block rounded-circle">
                    <p class="text-white text-center fw-medium fs-5 mt-4 ">WELCOME, {{ user.firstName }}</p><hr>
                </div>

                <div class="pt-5 pt-lg-0 mx-4 mx-lg-0">
                    <router-link to="/" class="btn btn-white bg-white border w-100 d-flex align-items-center justify-content-center gap-2 mb-3 fw-medium text-moon">Sign out</router-link>
                </div>
            </div>
        </div>
        <!-- Right Side -->
        <div class="col mt-5 ms-lg-5 ms-3">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active text-moon" id="personal-tab-btn" data-bs-toggle="tab" href="#personal-tab" role="tab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-vcard-fill me-2" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
                        </svg>Personal Information</a>
                </li>

                <li class="nav-item" role="presentation">
                    <a class="nav-link text-moon" id="order-tab-btn" data-bs-toggle="tab" href="#order-tab" role="tab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam-fill me-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                        </svg>Orders</a>
                </li>

                <li class="nav-item" role="presentation">
                    <a class="nav-link text-moon" id="address-tab-btn" data-bs-toggle="tab" href="#address-tab" role="tab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>Addresses</a>
                </li>
            </ul>

            <div class="tab-content mt-3" id="myTabContent">
                <!-- Personal Information -->
                <div class="tab-pane fade show active" id="personal-tab" role="tabpanel">
                    
                    <div class="container">
                        <div class="d-flex justify-content-between w-100">
                            <p class="fs-4 fw-bold text-moon py-3">Personal Information</p>
                            <button class="btn btn-link text-moon me-5" @click="toggleEdit">
                                {{ editLabel() }}
                            </button>
                        </div>

                        <div class="mt-4">
                            <p>
                                First Name:
                                <input
                                type="text"
                                class="form-control w-50 d-inline ms-lg-5 ms-2"
                                :readonly="!edit"
                                v-model.lazy="user.firstName"
                                >
                            </p>
                        </div>

                        <div class="mt-2">
                            <p>
                                Second Name:
                                <input
                                type="text"
                                class="form-control w-50 d-inline ms-lg-5 ms-2"
                                :readonly="!edit"
                                v-model="user.secondName"
                                >
                            </p>
                        </div>

                        <div class="mt-2">
                            <p>
                                Email:
                                <input
                                type="email"
                                class="form-control w-75 d-inline ms-lg-5 ms-2"
                                :readonly="!edit"
                                v-model="user.email"
                                >
                            </p>
                        </div>

                        <div class="mt-3"><hr /></div>
                    </div>

                    <!-- Phone number -->
                    <div class="container">
                        <p class="fs-4 fw-bold text-moon py-3">Phone Number</p>
                        <div class="mt-2">
                            <p>
                                <input
                                type="text"
                                class="form-control w-50 ms-3"
                                :readonly="!edit"
                                v-model="user.phone"
                                >
                            </p>
                        </div>
                        <div class="mt-3 mb-2"><hr /></div>
                    </div>

                    <!-- Notification -->
                    <div class="container">
                        <p class="fs-4 fw-bold text-moon py-3">Promotion Notification</p>
                        <form class="mt-2" @submit.prevent="">
                            <!-- Email -->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="email-noti" id="notif-email">
                                <label class="form-check-label" for="notif-email">Email</label>
                            </div>

                            <!-- WhatsApp -->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="whatsapp-noti" id="notif-whatsapp">
                                <label class="form-check-label" for="notif-whatsapp">Whatsapp</label>
                            </div>

                            <!-- SMS -->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" value="sms-noti" id="notif-sms">
                                <label class="form-check-label" for="notif-sms">SMS</label>
                            </div>

                            <button type="submit" class="btn w-25 text-white mt-2 bg-moon">Save</button>
                        </form>
                        <div class="mt-3 mb-2"><hr /></div>
                    </div>

                    <!-- Disable Account -->
                    <div class="container mb-5">
                        <p class="fs-4 fw-bold text-moon py-3">Disable Account</p>
                        <div class="mt-2">
                            <p class="d-inline">Delete your Account?</p>
                            <small class="text-muted d-block">Once you delete your account, there is no going back. Please be certain.</small>
                            
                            <!-- Modal -->
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-danger d-block mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Disable your account</button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Disable account</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to delete your account?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-danger">Delete your account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Orders -->
                <div class="tab-pane fade" id="order-tab" role="tabpanel">
                    
                    <div class="container mt-4">
                        <h3 class="fs-4 fw-bold text-moon mb-4 mt-5">My Orders</h3>

                        <div class="d-flex flex-wrap gap-1">
                            <!-- Order Item Example -->
                            <div class="card mb-3 shadow-sm rounded">
                                <div class="card-body">
                                    <div>
                                        <h5 class="card-title mb-1">Order #123456</h5>
                                        <p class="mb-0"><strong>Status:</strong> <span class="text-success">Delivered</span></p>
                                        <p class="mb-0"><strong>Date:</strong> 2025-07-15</p>
                                    </div>
                                    <div>
                                        <button class="btn mt-3">View Details</button>
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-3 shadow-sm rounded">
                                <div class="card-body">
                                    <div>
                                        <h5 class="card-title mb-1">Order #123457</h5>
                                        <p class="mb-0"><strong>Status:</strong> <span class="text-warning">Processing</span></p>
                                        <p class="mb-0"><strong>Date:</strong> 2025-07-18</p>
                                    </div>
                                    <div>
                                        <button class="btn mt-3">View Details</button>
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-3 shadow-sm rounded">
                                <div class="card-body">
                                    <div>
                                        <h5 class="card-title mb-1">Order #123458</h5>
                                        <p class="mb-0"><strong>Status:</strong> <span class="text-danger">Cancelled</span></p>
                                        <p class="mb-0"><strong>Date:</strong> 2025-07-19</p>
                                    </div>
                                    <div>
                                        <button class="btn mt-3">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--  Addresses -->
                <div class="tab-pane fade" id="address-tab" role="tabpanel">
                    
                      <div class="container mt-4">
                            <h3 class="fs-4 fw-bold text-moon py-3 mb-4">My Addresses</h3>

                            <div class="d-flex flex-wrap gap-2">
                                <!-- Address Card Example -->
                                <div class="card mb-3 shadow-sm rounded">
                                    <div class="card-body">
                                        <h5 class="card-title">Home Address <small>(primary)</small></h5>

                                        <p class="card-text text-muted mb-1">123 King Abdulaziz Rd</p>
                                        <p class="card-text text-muted mb-1">Riyadh, Saudi Arabia</p>
                                        <p class="card-text text-muted mb-3">Zip Code: 11564</p>

                                        <button class="btn me-2">Edit</button>
                                        <button class="btn btn bg-moon text-white">Delete</button>
                                    </div>
                                </div>

                                <div class="card mb-3 shadow-sm rounded">
                                    <div class="card-body">
                                        <h5 class="card-title">Work Address</h5>

                                        <p class="card-text text-muted mb-1">456 Prince Sultan St</p>
                                        <p class="card-text text-muted mb-1">Jeddah, Saudi Arabia</p>
                                        <p class="card-text text-muted mb-3">Zip Code: 21577</p>

                                        <button class="btn me-2">Edit</button>
                                        <button class="btn bg-moon text-white">Delete</button>
                                        
                                    </div>
                                </div>
                            </div>

                            <!-- Add New Address -->
                            <div class="d-flex justify-content-center my-4">
                                <button class="btn bg-moon text-white border-2">Add New Address</button>
                                
                            </div>
                        </div>
                </div>
            </div>

            
            
        </div>
    </div>
  </section>
</template>

<style scoped>
.form-check-input:checked {
    background-color: #3A3845;
    border-color: #3A3845;
  }

  .nav-tabs .nav-link.active {
    background-color: #3A3845;
    color: white !important;
    
}
</style>
