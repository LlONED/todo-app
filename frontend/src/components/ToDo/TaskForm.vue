<script setup>
import { computed, reactive, ref, onBeforeMount, triggerRef } from "vue";
import { useTasksStore } from "@/stores/tasks.js";

import { addTask } from "@/api";

const tasksStore = useTasksStore();

const initialFormState = {
  name: "",
  description: "",
};
const form = reactive({ ...initialFormState });
const isFormValid = computed(() => form.name.length && form.description.length);

const loading = ref(false);

function submit() {
  loading.value = true;

  addTask({
    name: form.name,
    description: form.description,
    done: false,
  })
    .then((data) => {
      for (const id in data) {
        const task = data[id];

        tasksStore.addTask(
          Number(id),
          task.name,
          task.description.replace(/\n/g, "<br/>"),
          task.done
        );
      }

      Object.assign(form, initialFormState);
    })
    .catch((e) => alert(e))
    .finally(() => {
      loading.value = false;
    });
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
        :disabled="loading"
        name="name"
        placeholder="Введите название задачи"
        required
      />

      <BaseTextarea
        v-model="form.description"
        :disabled="loading"
        name="description"
        placeholder="Введите описание задачи"
        class="description"
        required
      />
    </div>

    <BaseButton
      :disabled="!isFormValid || loading"
      success
      type="submit"
      class="submit"
    >
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
