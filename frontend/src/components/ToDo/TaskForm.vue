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

onBeforeMount(() => {
  form.name = 'Нажать на кнопку "Добавить задачу"';
  form.description =
    "Использовать tab и shift tab для перемещения по элементам";
});
</script>

<template>
  <form @submit.prevent="submit" class="form">
    <div class="fields-wrapper">
      <BaseInputText
        v-model="form.name"
        name="name"
        placeholder="Введите название задачи"
      />

      <BaseTextarea
        v-model="form.description"
        name="description"
        placeholder="Введите описание задачи"
        class="description"
      />
    </div>

    <BaseButton :disabled="!isFormValid" success type="submit" class="submit">
      Добавить задачу
    </BaseButton>
  </form>
</template>

<style scoped>
.form {
  background-color: var(--vt-c-black);

  width: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 12px;
  overflow: hidden;
}

.fields-wrapper {
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 12px;
}

.description {
  resize: vertical;
}

.submit {
  padding: 8px;
}
</style>
