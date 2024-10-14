<script setup lang="ts">
import FileForm from "@/components/FileForm.vue";
</script>

<template>
  <div class="page">
    <h2 class="heading">This is a file form page</h2>
    <FileForm />
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.heading {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .page {
    margin-top: 0;
    min-height: 100vh;
  }
}
</style>
