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
  <div class="container">
    <dl>
      <template v-for="user in props.filteredUsers" :key="user.id">
        <dt>ID:</dt>
        <dd>{{ user.id }}</dd>
        <dt>Name:</dt>
        <dd>{{ user.name }}</dd>
        <dt>Email:</dt>
        <dd>{{ user.email }}</dd>
        <dt>Gender:</dt>
        <dd>{{ user.gender }}</dd>
        <dt>Status:</dt>
        <dd>{{ user.status }}</dd>
        <div><button @click="startEdit(user)">edit</button></div>
      </template>
    </dl>
  </div>
</template>

<style scoped lang="scss"></style>
