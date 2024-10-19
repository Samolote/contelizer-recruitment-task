<script setup lang="ts">
import { ref } from "vue";
import type { User } from "@/types/user";

const selectedUser = defineModel<User | null>();
const dialogRef = ref<HTMLDialogElement | null>(null);

const emit = defineEmits(["submitEdit", "cancelEdit"]);

const submitEdit = () => {
  emit("submitEdit");
};

const cancelEdit = () => {
  emit("cancelEdit");
};

const showModal = () => {
  dialogRef.value?.showModal();
};

const closeModal = () => {
  dialogRef.value?.close();
};

defineExpose({
  show: showModal,
  close: closeModal,
});
</script>

<template>
  <dialog ref="dialogRef" class="dialog">
    <h3 class="dialog__header">Edit User</h3>
    <form v-if="selectedUser" class="form" @submit.prevent="submitEdit">
      <div class="form__input-wrapper">
        <input
          type="text"
          name="edit-name"
          id="edit-name"
          class="form__input"
          required
          v-model="selectedUser.name"
        />
        <label class="form__input-label" for="edit-name">Name:</label>
      </div>
      <div class="form__input-wrapper">
        <input
          type="text"
          name="edit-email"
          id="edit-email"
          class="form__input"
          required
          v-model="selectedUser.email"
        />
        <label for="edit-email" class="form__input-label">Email:</label>
      </div>

      <div class="form__button-wrapper">
        <button class="form__button">save</button>
        <button class="form__button" @click="cancelEdit">cancel</button>
      </div>
    </form>
  </dialog>
</template>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 30px;
  border-radius: var(--base-border-radius);
  border: 1px solid var(--color-border);
  width: 500px;
  max-width: 90%;
  background: var(--color-background);
  color: inherit;
  transform: translate(-50%, -50%);

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &__header {
    font-size: 1.2rem;
    color: var(--color-heading);
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
