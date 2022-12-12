<template>
  <div class="about">
    <h1>This is an about page {{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const message = inject("message");
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
