<script setup>
import { computed, reactive, onBeforeMount } from "vue";
import { useTasksStore } from "@/stores/tasks.js";

const tasksStore = useTasksStore();

const initialFormState = {
  name: "",
  description: "",
};
const form = reactive({ ...initialFormState });
const isFormValid = computed(() => form.name.length && form.description.length);

function submit() {
  tasksStore.addTask(form.name, form.description.replace(/\n/g, "<br/>"));
  Object.assign(form, initialFormState);
}
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <input
        v-model="form.name"
        type="text"
        name="name"
        placeholder="Введите название задачи"
      />

      <textarea
        v-model="form.description"
        name="description"
        placeholder="Введите описание задачи"
      />
    </div>

    <button :disabled="!isFormValid" type="submit">Добавить задачу</button>
  </form>
</template>

<style scoped></style>
