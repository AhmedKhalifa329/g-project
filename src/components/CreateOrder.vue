// src/components/CreateOrder.vue
<template>
  <div>
    <h1>Create Order</h1>
    <form @submit.prevent="submitOrder">
      <!-- حقول النموذج لتفاصيل الطلب -->
      <button type="submit">Submit Order</button>
    </form>
  </div>
</template>

<script>
import { createOrder } from "@/services/api";

export default {
  data() {
    return {
      orderData: {
        items: [{ product: 1, quantity: 2 }],
        email: "jsjdjsj@gmail.com",
        phone_number: "012345678910",
        country: "Egypt",
        city: "Cairo",
        zip_code: "12334",
        state: "embaba",
        username: "mostafa",
      },
    };
  },
  methods: {
    async submitOrder() {
      try {
        const response = await createOrder(this.orderData);
        console.log("Order created:", response.data);
      } catch (error) {
        console.error("Error creating order:", error);
      }
    },
  },
};
</script>
