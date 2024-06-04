<!-- eslint-disable prettier/prettier -->

<template>
    <section
        class="vh-100 bg-image"
        style="
            background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
        "
    >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
                <div
                    class="row d-flex justify-content-center align-items-center h-100"
                >
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">
                                    Create an account
                                </h2>

                                <form @submit.prevent="createuser">
                                    <div
                                        data-mdb-input-init
                                        class="form-outline mb-4"
                                    >
                                        <input
                                            type="text"
                                            id="form3Example1cg"
                                            class="form-control form-control-lg"
                                            placeholder="Your Name"
                                            v-model="formData.userName"
                                        />
                                        <label
                                            class="form-label"
                                            for="form3Example1cg"
                                        ></label>
                                        <div
                                            v-if="errors.userName"
                                            class="text-danger"
                                        >
                                            {{ errors.userName }}
                                        </div>
                                    </div>

                                    <div
                                        data-mdb-input-init
                                        class="form-outline mb-4"
                                    >
                                        <input
                                            type="email"
                                            id="form3Example3cg"
                                            class="form-control form-control-lg"
                                            placeholder="Your Email"
                                            v-model="formData.email"
                                        />
                                        <label
                                            class="form-label"
                                            for="form3Example3cg"
                                        ></label>
                                        <div
                                            v-if="errors.email"
                                            class="text-danger"
                                        >
                                            {{ errors.email }}
                                        </div>
                                    </div>

                                    <div
                                        data-mdb-input-init
                                        class="form-outline mb-4"
                                    >
                                        <input
                                            type="password"
                                            id="form3Example4cg"
                                            class="form-control form-control-lg"
                                            placeholder="Password"
                                            v-model="formData.password"
                                        />
                                        <label
                                            class="form-label"
                                            for="form3Example4cg"
                                        ></label>
                                        <div
                                            v-if="errors.password"
                                            class="text-danger"
                                        >
                                            {{ errors.password }}
                                        </div>
                                    </div>

                                    <div
                                        data-mdb-input-init
                                        class="form-outline mb-4"
                                    >
                                        <input
                                            type="password"
                                            id="form3Example4cdg"
                                            class="form-control form-control-lg"
                                            placeholder="Repeat your password"
                                            v-model="formData.passwordrepeat"
                                        />
                                        <label
                                            class="form-label"
                                            for="form3Example4cdg"
                                        ></label>
                                        <div
                                            v-if="errors.passwordrepeat"
                                            class="text-danger"
                                        >
                                            {{ errors.passwordrepeat }}
                                        </div>
                                    </div>

                                    <div
                                        class="form-check d-flex justify-content-center mb-5"
                                    >
                                        <input
                                            class="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="form2Example3cg"
                                            v-model="formData.agreeTerms"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="form2Example3cg"
                                        >
                                            I agree to all statements in
                                            <a href="#!" class="text-body"
                                                ><u>Terms of service</u></a
                                            >
                                        </label>
                                        <div
                                            v-if="errors.agreeTerms"
                                            class="text-danger"
                                        >
                                            {{ errors.agreeTerms }}
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <button
                                            type="submit"
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                        >
                                            Register
                                        </button>
                                    </div>

                                    <p class="text-center text-muted mt-5 mb-0">
                                        Have already an account?
                                        <a class="fw-bold text-body"
                                            ><u
                                                ><router-link to="/loginViwe"
                                                    >Login here</router-link
                                                ></u
                                            ></a
                                        >
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import axios from "axios";
export default {
    name: "SignUp",
    data() {
        return {
            formData: {
                userName: "",
                email: "",
                password: "",
                passwordrepeat: "",
                agreeTerms: false,
            },
            errors: {},
        };
    },
    methods: {
        validateForm() {
            this.errors = {};
            if (!this.formData.userName) {
                this.errors.userName = "Name is required.";
            }
            if (!this.formData.email) {
                this.errors.email = "Email is required.";
            } else if (!this.validEmail(this.formData.email)) {
                this.errors.email = "Valid email is required.";
            }
            if (!this.formData.password) {
                this.errors.password = "Password is required.";
            }
            if (this.formData.password !== this.formData.passwordrepeat) {
                this.errors.passwordrepeat = "Passwords do not match.";
            }
            if (!this.formData.agreeTerms) {
                this.errors.agreeTerms = "You must agree to the terms.";
            }
            return Object.keys(this.errors).length === 0;
        },
        validEmail(email) {
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

            return re.test(email);
        },
        createuser() {
            if (this.validateForm()) {
                axios
                    .post("/api/signup", this.formData)
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error));
            }
        },
    },
};
</script>
<!-- eslint-disable prettier/prettier -->

<style lang="scss" scoped>
section {
    margin-bottom: -48px;
    height: 800px !important;

    .card {
        background-color: rgba(0, 0, 0, 0) !important;
    }

    .card-body {
        background-color: rgba(0, 0, 0, 0.5) !important;
    }

    button {
        background-color: #f6b127 !important;
    }
}

.gradient-custom-3 {
    /* fallback for old browsers */
    background: #84fab0;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(
        to right,
        rgba(132, 250, 176, 0.5),
        rgba(143, 211, 244, 0.5)
    );

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(
        to right,
        rgba(132, 250, 176, 0.5),
        rgba(143, 211, 244, 0.5)
    );
}

.gradient-custom-4 {
    /* fallback for old browsers */
    background: #84fab0;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(
        to right,
        rgba(132, 250, 176, 1),
        rgba(143, 211, 244, 1)
    );

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(
        to right,
        rgba(132, 250, 176, 1),
        rgba(143, 211, 244, 1)
    );
}
</style>
