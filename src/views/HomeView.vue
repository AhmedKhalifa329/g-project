<!-- eslint-disable prettier/prettier -->
<template>
    <section>
        <div class="home">
            <HelloWorld />
        </div>
    </section>
</template>
<!-- eslint-disable prettier/prettier -->

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
<!-- eslint-disable prettier/prettier -->

<style>
section {
    margin-bottom: -48px;
}
</style>
