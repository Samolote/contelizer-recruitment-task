<script setup lang="ts">
import { ref } from "vue";

const file = ref<File | null>(null);
const fileLines = ref<string[]>([]);

const handleFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const [tempFile] = input.files || [];

  file.value = tempFile;
};

const handleSubmit = async () => {
  if (!file.value) return;

  const fileContent = await file.value.text();
  const fileContentLines = fileContent.split(/[\r\n]+/);

  const shuffledLines: string[] = fileContentLines.map((line) => {
    if (line.length <= 3) return line;

    const firstChar = line[0];
    const middleSection = [...line.slice(1, line.length - 1)];
    const lastChar = line[line.length - 1];

    for (let index = middleSection.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [middleSection[index], middleSection[randomIndex]] = [
        middleSection[randomIndex],
        middleSection[index],
      ];
    }

    const shuffledLine = [firstChar, ...middleSection, lastChar].join("");

    return shuffledLine;
  });

  fileLines.value = shuffledLines;
};
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form__input-wrapper form__input-wrapper--type-file">
      <label for="file" class="form__file-input-label"
        >Choose a text file:</label
      >
      <input
        type="file"
        name="file"
        id="file"
        class="form__file-input"
        accept=".txt"
        @change="handleFileChange"
      />
    </div>
    <button class="form__button">generate output</button>
  </form>
  <section class="output">
    <h3 class="output__heading">File output:</h3>
    <div class="output__wrapper">
      <p v-for="line in fileLines" :key="line">
        {{ line }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
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
    border-radius: var(--base-border-radius);
    border: 1px solid var(--color-border);
  }
}
</style>
