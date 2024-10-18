<script setup lang="ts">
import { ref } from "vue";

const isValid = ref<boolean | null>(null);

const peselInput = ref("");

const validatePesel = () => {
  const pesel = peselInput.value;

  if (!/^\d{11}$/.test(pesel)) {
    isValid.value = false;
    return;
  }

  if (/^(\d)\1*$/.test(pesel)) {
    isValid.value = false;
    return;
  }

  const year = parseInt(pesel.substring(0, 2));
  const month = parseInt(pesel.substring(2, 4));
  const day = parseInt(pesel.substring(4, 6));

  let fullYear;
  if (month >= 1 && month <= 12) {
    fullYear = 1900 + year;
  } else if (month >= 21 && month <= 32) {
    fullYear = 2000 + year;
  } else if (month >= 41 && month <= 52) {
    fullYear = 2100 + year;
  } else if (month >= 61 && month <= 72) {
    fullYear = 2200 + year;
  } else if (month >= 81 && month <= 92) {
    fullYear = 1800 + year;
  } else {
    isValid.value = false;
    return;
  }

  const correctedMonth = month % 20;

  const isValidDate = (y: number, m: number, d: number) => {
    const date = new Date(y, m - 1, d);
    return (
      date.getFullYear() === y &&
      date.getMonth() === m - 1 &&
      date.getDate() === d
    );
  };

  if (!isValidDate(fullYear, correctedMonth, day)) {
    isValid.value = false;
    return;
  }

  const multipliers = [1, 3, 7, 9];

  let sum = 0;
  for (let i = 0; i < pesel.length - 1; i++) {
    sum += Number(pesel[i]) * multipliers[i % 4];
  }

  const modulo = sum % 10;
  const lastDigit = Number(pesel[10]);

  const validity =
    (modulo === 0 && lastDigit === 0) || lastDigit === 10 - modulo;

  isValid.value = validity;
};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  max-width: 500px;

  &__input-wrapper {
    position: relative;
    margin: 40px 0 20px;
    width: 100%;
  }

  &__input-label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    cursor: text;
    will-change: top, font-size;
    transition: top 0.2s ease, font-size 0.2s ease, background-color 0.5s;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -0.25rem;
      right: -0.25rem;
      bottom: 0;
      z-index: -1;
      background: var(--color-background);
      opacity: 0;
      transition: opacity 0.4s;
    }
  }

  &__input {
    padding: 0.6rem 1.2rem;
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid var(--color-border);
    border-radius: var(--base-border-radius);

    &:valid ~ .form__input-label,
    &:focus ~ .form__input-label {
      top: 0rem;
      font-size: 0.5rem;
      cursor: default;
      pointer-events: none;

      &::after {
        opacity: 1;
      }
    }
  }

  &__button {
    text-transform: capitalize;
  }
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
