<script setup lang="ts">
import type { User } from "@/types/user";

const props = defineProps({
  filteredUsers: {
    type: Array as () => User[],
    required: true,
  },
});

const emit = defineEmits(["editUser"]);

const startEdit = (user: User) => {
  emit("editUser", user);
};
</script>

<template>
  <ul class="list">
    <li class="list__item" v-for="user in props.filteredUsers" :key="user.id">
      <dl class="details-list">
        <div class="details-list__wrapper">
          <dt class="details-list__term">ID</dt>
          <dd class="details-list__description">{{ user.id }}</dd>
        </div>
        <div class="details-list__wrapper">
          <dt class="details-list__term">Name</dt>
          <dd class="details-list__description">{{ user.name }}</dd>
        </div>
        <div class="details-list__wrapper">
          <dt class="details-list__term">Email</dt>
          <dd class="details-list__description">{{ user.email }}</dd>
        </div>
        <div class="details-list__wrapper">
          <dt class="details-list__term">Gender</dt>
          <dd class="details-list__description">{{ user.gender }}</dd>
        </div>
        <div class="details-list__wrapper">
          <dt class="details-list__term">Status</dt>
          <dd class="details-list__description">{{ user.status }}</dd>
        </div>
        <div class="details-list__button-wrapper">
          <button class="details-list__button" @click="startEdit(user)">
            edit
          </button>
        </div>
      </dl>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  padding: 0 20px;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  list-style-type: none;
  max-height: 600px;
  overflow-y: scroll;

  &__item {
    padding: 20px;
    border-bottom: 1px solid var(--color-border);

    &:last-child {
      border-bottom: none;
    }
  }
}

.details-list {
  &__wrapper {
    display: flex;
  }

  &__term {
    font-weight: 500;
    margin-right: auto;

    &::after {
      content: ":";
    }
  }

  &__description {
    padding-left: 1rem;
    font-weight: 400;
  }

  &__button-wrapper {
    display: flex;
    justify-content: center;
  }

  &__button {
    text-transform: capitalize;
  }
}
</style>
