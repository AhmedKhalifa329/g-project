<!-- eslint-disable prettier/prettier -->
<template>
  <div class="about">
    <div class="continer">
      <h1 class="headr">This is {{ name }} page</h1>
    </div>
    <ProudcutView />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import ProudcutView from "../components/companiesView.vue";
export default {
  name: "HomeView",
  components: ProudcutView,
};
</script>
