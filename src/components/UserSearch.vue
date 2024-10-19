<script setup lang="ts">
const searchModel = defineModel<string>();
</script>

<template>
  <form class="form">
    <div class="form__input-wrapper">
      <input
        type="text"
        name="search"
        id="search"
        class="form__input"
        required
        v-model="searchModel"
      />
      <label for="search" class="form__input-label">Search for users:</label>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
