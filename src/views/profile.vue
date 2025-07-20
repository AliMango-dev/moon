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
                    <!-- accordion-->
                    <p class="fs-5 fw-medium mb-4 mt-4 text-white text-center">Account Settings</p>
                    <div class="accordion border-0" id="profileAccordion">
                        <div class="accordion-item border-start-0 border-end-0">
                            <h2 class="accordion-header">
                                <div class="accordion-button collapsed border-0 rounded-2 shadow-none px-0 fw-normal ps-2 pe-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam-fill me-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                                    </svg> Orders
                                </div>
                            </h2>
                        </div>

                        <div class="accordion-item border-start-0 border-end-0">
                            <h2 class="accordion-header">
                                <div class="accordion-button collapsed border-0 rounded-2 shadow-none px-0 fw-normal ps-2 pe-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg> Addresses
                                </div>
                            </h2>
                        </div>

                        <div class="accordion-item border-start-0 border-end-0">
                            <h2 class="accordion-header">
                                <router-link to="/fav" class="accordion-button collapsed border-0 rounded-2 shadow-none px-0 fw-normal ps-2 pe-2 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill me-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                    </svg>Favorite list
                                </router-link>            
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="pt-5 pt-lg-0 mx-4 mx-lg-0">
                    <router-link to="/" class="btn btn-white bg-white border w-100 d-flex align-items-center justify-content-center gap-2 mb-3 fw-medium text-moon">Sign out</router-link>
                </div>
            </div>
        </div>
        <!-- Right Side -->
        <div class="col mt-5 ms-lg-5 ms-3">
             <!-- Personal Information -->
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
                    <button class="btn btn-danger d-block mt-4">Disable your account</button>
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
</style>
