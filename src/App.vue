<template>
    <AppHeader />
    <router-view />
    <AppFooter />
</template>
<script>
import AppHeader from "../src/components/AppHeader.vue";
import AppFooter from "../src/components/AppFooter.vue";

export default {
    components: {
        AppHeader,
        AppFooter,
    },
};
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
