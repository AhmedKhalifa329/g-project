<!-- eslint-disable prettier/prettier -->
<template>
  <div class="about">
    <div class="continer">
      <h1 class="headr">This is {{ name }} page</h1>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab hic, quo tenetur sit libero explicabo, quae ex sunt eveniet eius, quia atque iure incidunt numquam. Nesciunt eos amet laboriosam.</P>
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
