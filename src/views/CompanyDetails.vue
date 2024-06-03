<!-- eslint-disable prettier/prettier-->
<template>
    <section>
        <div class="container">
            <h1 class="text-center">{{ name }}</h1>
            <div class="row">
                <div class="col-md-5">
                    <!-- img-->
                    <div class="Product-img">
                        <img :src="image" class="img-fluid w-100 rounded-top" alt="" />
                    </div>
                </div>
                <div class="col-md-7">
                    <!-- Contact-->
                    <h2 class="text-center">Connect with us</h2>
                    <hr />
                    <div class="contact-info">
                        <h4 class="mb-4">Contact Information</h4>
                        <ul class="list-unstyled">
                            <li class="mb-4">
                                <i class="fas fa-phone fa-fw mr-4"></i>
                                <span>Phone:</span>
                                <a href="tel:+20123456789" class="text-link">+20123456789</a>
                            </li>
                            <li class="mb-4">
                                <i class="fas fa-envelope fa-fw mr-4"></i>
                                <span>Email:</span>
                                <a href="mailto:info@example.com" class="text-link">info@example.com</a>
                            </li>
                            <li class="mb-4">
                                <i class="fas fa-globe fa-fw mr-2"></i>
                                <span>Website:</span>
                                <a href="https://www.example.com" target="_blank" class="text-link">www.example.com</a>
                            </li>
                            <li class="mb-4">
                                <i class="fas fa-map-marker-alt fa-fw mr-2"></i>
                                <span>Address:</span>
                                <p class="mb-0">Main Street, Building 123, Nasr City, Cairo</p>
                            </li>
                            <li class="mb-4">
                                <div class="social-media">
                                    <div class="col-lg-8">
                                        <div class="d-flex justify-content-end pt-3">
                                            <a class="btn btn-outline-secondary me-2 btn-md-square rounded-circle a-icon"
                                                href="">
                                                <font-awesome-icon icon="fa-brands fa-x-twitter" class="icon" />
                                            </a>
                                            <a class="btn btn-outline-secondary me-2 btn-md-square rounded-circle a-icon"
                                                href="">
                                                <font-awesome-icon icon="fa-brands fa-facebook" class="icon" />
                                            </a>
                                            <a class="btn btn-outline-secondary me-2 btn-md-square rounded-circle a-icon"
                                                href="">
                                                <font-awesome-icon icon="fa-brands fa-youtube" class="icon" />
                                            </a>
                                            <a class="btn btn-outline-secondary btn-md-square rounded-circle a-icon"
                                                href="">
                                                <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<!-- eslint-disable prettier/prettier-->

<script>
import JsonProducts from "../Json/product.json";
export default {
    name: "CompanyDetails",
    data() {
        return {
            Products: JsonProducts,
            image: JsonProducts[0].image,
            name: JsonProducts[0].name,
        };
    },
};
</script>
<!-- eslint-disable prettier/prettier-->

<style scoped>
section {
    background-image: url(../assets/download.jpeg);
    background-size: cover;
    background-position: center;
    height: 100vh;

    /* adjust the height to your liking */
}

.container {
    padding-top: 5rem;
    padding-bottom: 5rem;

    color: #f5f0f0
}

.text-link {
    text-decoration: none;
    color: #007bff;
}

.social-link {
    text-decoration: none;
    color: #f5f0f0;
}
</style>
