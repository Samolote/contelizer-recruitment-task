import { ref, computed } from "vue";
import type { User } from "@/types/user";

const API_URL = "https://gorest.co.in/public/v2/users";
const TOKEN = "YOUR_ACCESS_TOKEN"; // Replace with your GoRest API token

export const useUsers = () => {
  const users = ref<User[]>([]);
  const searchQuery = ref("");
  const isLoading = ref(false);
  const error = ref("");

  const fetchUsers = async () => {
    isLoading.value = true;
    error.value = "";
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      users.value = data;
    } catch (err: unknown) {
      error.value =
        err instanceof Error
          ? `${err.name}: ${err.message}`
          : "Failed to fetch users";
    } finally {
      isLoading.value = false;
    }
  };

  const editUser = async (id: number, updatedUser: User) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error("Failed to edit user");
      }

      const data = await response.json();
      const index = users.value.findIndex((user: User) => user.id === id);

      if (index !== -1) {
        users.value[index] = data;
      }
    } catch (err: unknown) {
      error.value =
        err instanceof Error
          ? `${err.name}: ${err.message}`
          : "Failed to edit users";
    }
  };

  const filteredUsers = computed(() =>
    users.value.filter((user: User) =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );

  return {
    users,
    searchQuery,
    filteredUsers,
    isLoading,
    error,
    fetchUsers,
    editUser,
  };
};
