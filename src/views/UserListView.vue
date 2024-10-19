<script setup lang="ts">
import { onMounted, ref } from "vue";
import UserList from "@/components/UserList.vue";
import UserSearch from "@/components/UserSearch.vue";
import UserEditFormDialog from "@/components/UserEditFormDialog.vue";
import { useUsers } from "@/composables/useUsers";
import type { User } from "@/types/user";

const { searchQuery, filteredUsers, fetchUsers, isLoading, error, editUser } =
  useUsers();

const selectedUser = ref<User | null>(null);
const modalRef = ref<InstanceType<typeof UserEditFormDialog>>();

const startEdit = (user: User) => {
  selectedUser.value = { ...user };
  if (modalRef.value) {
    modalRef.value.show();
  }
};

const submitEdit = async () => {
  if (selectedUser.value) {
    await editUser(selectedUser.value.id, selectedUser.value);
    selectedUser.value = null;
    if (modalRef.value) {
      modalRef.value.close();
    }
  }
};

const cancelEdit = () => {
  selectedUser.value = null;
  if (modalRef.value) {
    modalRef.value.close();
  }
};

onMounted(fetchUsers);
</script>

<template>
  <div class="page">
    <h2 class="page__heading">This is a User List page</h2>
    <UserSearch v-model="searchQuery" />
    <p v-if="isLoading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    <UserList
      v-if="!isLoading && !error"
      :filteredUsers="filteredUsers"
      @editUser="startEdit"
    />
    <UserEditFormDialog
      ref="modalRef"
      v-model="selectedUser"
      @submitEdit="submitEdit"
      @cancelEdit="cancelEdit"
    />
  </div>
</template>

<style scoped lang="scss"></style>
