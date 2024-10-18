<script setup lang="ts">
import type { User } from "@/types/user";

const selectedUser = defineModel<User>();

const emit = defineEmits(["submitEdit", "cancelEdit"]);

const submitEdit = () => {
  emit("submitEdit");
};

const cancelEdit = () => {
  emit("cancelEdit");
};
</script>

<template>
  <div v-if="selectedUser">
    <h2>Edit User</h2>
    <form class="form" @submit.prevent="submitEdit">
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

      <button class="form__button">save</button>
      <button class="form__button" @click="cancelEdit">cancel</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
