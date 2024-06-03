<!-- eslint-disable prettier/prettier -->
<template>
  <section>
    <h1 class="headr">This is {{ name + " " }}page</h1>
    <div class="container-fluid featurs py-5">
      <div class="container py-5">
        <div class="tab-class text-center">
          <div class="tab-content">
            <div class="col-lg-12">
              <div class="input-group mt-4">
                <input v-model="filter" type="text" class="form-control" placeholder="Filter products..." />
              </div>
              <div class="row g-4">

                <Product v-for="Product in filteredProducts" :key="Product.id" :name="Product.name"
                  :paragraph="Product.paragraph" :price="Product.price" :image="Product.image" />
              </div>
              <button v-if="hasMoreProducts" @click="showMoreProducts" class="btn btn-primary mt-4">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Product from "../components/Product.vue";
import JsonProducts from "../Json/product.json";

export default {
  components: {
    Product,
  },
  data() {
    return {
      Products: JsonProducts,
      displayedProducts: JsonProducts.slice(0, 28),
      name: " Products",
      filter: "",
    };
  },
  computed: {

    filteredProducts() {
      if (this.filter === '') {
        return this.displayedProducts;
      }
      return this.Products.filter((product) => {
        return product.name.toLowerCase().startsWith(this.filter.toLowerCase());
      });
    },
    hasMoreProducts() {
      return this.Products.length > this.displayedProducts.length;
    },
  },
  methods: {
    showMoreProducts() {
      this.displayedProducts.push(...this.Products.slice(9, 18));
    },
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped lang="scss">
section {
  h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: #45595b;
  }

  background-color: rgb(255 255 255);

  .container {
    background-color: rgb(255 255 255);
  }

  .btn {
    &.btn-primary {
      background-color: rgb(19 120 204);
      border-color: rgb(19 120 204);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: rgb(10 78 153);
        border-color: rgb(10 78 153);
      }

      &:focus {
        box-shadow: 0 0 0 0.2rem rgb(12 52 102 / 50%);
      }
    }
  }
}
</style>