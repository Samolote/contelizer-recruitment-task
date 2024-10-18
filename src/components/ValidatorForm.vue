<script setup lang="ts"></script>

<template>
  <form class="form">
    <div class="form__input-wrapper">
      <input type="text" name="pesel" id="pesel" class="form__input" required />
      <!-- pattern="/^\d{11}$/" -->
      <label for="pesel" class="form__input-label">Input PESEL number:</label>
    </div>
    <button class="form__button">validate PESEL</button>
  </form>
  <section class="output">
    <h3 class="output__heading">Validator output:</h3>
    <p class="output__content">Invalid❌ / Valid✅</p>
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

  &__heading {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: var(--color-heading);
  }

  &__wrapper {
    padding: 20px;
    border: 1px solid var(--color-border);
    border-radius: var(--base-border-radius);
    background: var(--color-background);
  }
}
</style>
