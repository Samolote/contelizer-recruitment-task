<script setup lang="ts">
import { usePesel } from "@/composables/usePesel";

const { isValid, peselInput, validatePesel } = usePesel();
</script>

<template>
  <form class="form" @submit.prevent="validatePesel">
    <div class="form__input-wrapper">
      <input
        type="text"
        name="pesel"
        id="pesel"
        class="form__input"
        required
        v-model="peselInput"
      />
      <label for="pesel" class="form__input-label">Input PESEL number:</label>
    </div>
    <button class="form__button">validate PESEL</button>
  </form>
  <section class="output">
    <h3 class="output__heading">Validator output:</h3>
    <p v-if="isValid === true">Valid PESEL ✅</p>
    <p v-else-if="isValid === false">Invalid PESEL ❌</p>
  </section>
</template>

<style scoped lang="scss">
.form {
  margin-bottom: 40px;
}

.output {
  width: 100%;
  max-width: 500px;
  text-align: center;

  &__heading {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--color-heading);
  }
}
</style>
