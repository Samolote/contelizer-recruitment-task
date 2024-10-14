<script setup lang="ts"></script>

<template>
  <form action="" class="form">
    <div class="form__input-wrapper">
      <label for="file" class="form__file-input-label"
        >Choose a text file:</label
      >
      <input
        type="file"
        name=""
        id="file"
        class="form__file-input"
        accept=".txt"
      />
    </div>
    <button class="form__button">generate output</button>
  </form>
  <section class="output">
    <h3 class="output__heading">File output:</h3>
    <div class="output__wrapper">output here heheee</div>
  </section>
</template>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  max-width: 500px;

  &__input-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 40px 0 20px;
    padding: 20px;
    border: 1px solid var(--color-border);
    width: 100%;
    border-radius: var(--base-border-radius);
    background: var(--color-background);
  }

  &__file-input-label {
    flex-basis: 100%;
    font-size: 1.1rem;
  }

  &__file-input {
    flex-basis: 100%;
  }

  &__button {
    text-transform: capitalize;
  }
}

.output {
  width: 100%;
  max-width: 500px;

  &__heading {
    margin-bottom: 20px;
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
