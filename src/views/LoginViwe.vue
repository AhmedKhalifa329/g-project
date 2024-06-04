<template>
    <section>
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Sign In</h3>
                        <div class="d-flex justify-content-end social_icon">
                            <span
                                ><font-awesome-icon
                                    icon="fa-brands fa-facebook"
                                    class="icon"
                            /></span>
                            <span
                                ><font-awesome-icon icon="fa-brands fa-google"
                            /></span>
                            <span
                                ><font-awesome-icon
                                    icon="fa-brands fa-x-twitter"
                                    class="icon"
                            /></span>
                        </div>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="log_in">
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        ><font-awesome-icon
                                            icon="fa-solid fa-user"
                                    /></span>
                                </div>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="username"
                                    v-model="formData.userName"
                                />
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        ><font-awesome-icon
                                            icon="fa-solid fa-key"
                                    /></span>
                                </div>
                                <input
                                    type="password"
                                    class="form-control"
                                    placeholder="password"
                                    v-model="formData.password"
                                />
                            </div>
                            <div class="row align-items-center remember">
                                <input type="checkbox" />Remember Me
                            </div>
                            <div class="form-group">
                                <input
                                    type="submit"
                                    value="Login"
                                    class="btn float-right login_btn"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-center links">
                            Don't have an account?
                            <router-link to="/SignUp">Sign Up</router-link>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            formData: {
                userName: "",
                password: "",
            },
            errors: {},
        };
    },
    methods: {
        log_in() {
            if (this.validateForm()) {
                axios
                    .post("/api/login", this.formData)
                    .then((response) => {
                        console.log(response);
                        // redirect to dashboard
                        this.$router.push("/Dashboard");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        validateForm() {
            if (this.formData.userName && this.formData.password) {
                return true;
            } else {
                if (!this.formData.userName)
                    this.errors.userName = "Username is required.";
                if (!this.formData.password)
                    this.errors.password = "Password is required.";
                return false;
            }
        },
    },
};
</script>
<style scoped>
section {
    background-image: url("http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 700px;
    font-family: "Numans", sans-serif;
    margin-bottom: -48px;
}

.container {
    height: 120%;
    align-content: center;
}

.card-header {
    position: relative;
    margin: 20px;
}

h3 {
    position: absolute;
    top: -10px;
}

.card {
    height: 370px;
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.5) !important;
}

.input-group {
    margin-bottom: 20px;
}

.input-group-prepend span[data-v-7a1a9600] {
    width: 50px;
    background-color: #ffc312;
    color: black;
    border: 0 !important;
    height: 40px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0;
}

.social_icon span {
    font-size: 60px;
    margin-left: 10px;
    color: #ffc312;
}

.social_icon span:hover {
    color: white;
    cursor: pointer;
}

.card-header h3 {
    color: white;
}

.social_icon {
    position: absolute;
    right: 20px;
    top: -45px;
}

.input-group-prepend span {
    width: 50px;
    background-color: #ffc312;
    color: black;
    border: 0 !important;
}

input:focus {
    outline: 0 0 0 0 !important;
    box-shadow: 0 0 0 0 !important;
}

.remember {
    color: white;
}

.remember input {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    margin-right: 5px;
}

.login_btn {
    color: black;
    background-color: #ffc312;
    width: 100px;
    margin-left: 260px;
}

.login_btn:hover {
    color: black;
    background-color: white;
}

.links {
    color: white;
}

.links a {
    margin-left: 4px;
}
</style>
