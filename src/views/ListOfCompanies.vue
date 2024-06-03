<!-- eslint-disable prettier/prettier -->
<template>
  <section>
    <h1 class="headr">This is {{ name + " " }}page</h1>
    <div class="container-fluid featurs py-5">
      <div class="container py-5">
        <div class="tab-class text-center">
          <div class="tab-content">
            <div class="col-lg-12">
              <div class="row g-4">
                <companiesView
                  v-for="(company) in displayedCompanys"
                  :key="company.id"
                  :name="company.name"
                  :paragraph="company.paragraph"
                  :price="company.price"
                  :image="company.image"
                />
              </div>
              <button
                v-if="hasMoreCompanys"
                @click="showMoreCompanys"
                class="btn btn-primary mt-4"
              >
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
import companiesView from "../components/companiesView.vue";
import JsonProducts from "../Json/product.json";

export default {
  components: {
    companiesView,
  },
  data() {
    return {
      companys: JsonProducts,
      displayedCompanys: JsonProducts.slice(0, 28),
      name: "  List of companies",
    };
  },
  computed: {
    hasMoreCompanys() {
      return this.companys.length > this.displayedCompanys.length;
    },
  },
  methods: {
    showMoreCompanys() {
      this.displayedCompanys.push(...this.companys.slice(9, 18));
    },
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "companies",
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

