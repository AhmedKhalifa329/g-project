<template>
  <section>
    <div class="home">
      <HelloWorld />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style>
section {
  margin-bottom: -48px;
}
</style>
