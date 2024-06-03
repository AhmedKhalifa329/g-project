// src/components/Categories.vue
<template>
  <div>
    <h1>Categories</h1>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getCategories } from "@/services/api";

export default {
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    try {
      const response = await getCategories();
      this.categories = response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },
};
</script>
