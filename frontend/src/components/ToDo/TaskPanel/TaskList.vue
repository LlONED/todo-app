<script setup>
import { ref, onBeforeMount } from "vue";
import TaskListItem from "./TaskListItem.vue";

import { getTasks } from "@/api";

import { tasksFilterEnum } from "@/helpers/constants/tasks";
import { useTasksStore } from "@/stores/tasks.js";

const tasksStore = useTasksStore();

const loading = ref(false);

onBeforeMount(() => {
  loading.value = true;

  getTasks()
    .then((tasks) => {
      for (const id in tasks) {
        const task = tasks[id];

        tasksStore.addTask(Number(id), task.name, task.description, task.done);
      }
    })
    .catch((e) => alert(e))
    .finally(() => {
      loading.value = false;
    });
});
</script>

<template>
  <p v-if="loading">Загрузка заданий →_→</p>
  <ul v-else-if="tasksStore.filteredTasks.length" class="task-list">
    <TaskListItem
      v-for="[id, task] in tasksStore.filteredTasks"
      :key="id"
      :id="id"
      :name="task.name"
      :description="task.description"
      :done="task.done"
    />
  </ul>
  <p
    v-else-if="
      tasksStore.filter === tasksFilterEnum.FINISHED && tasksStore.size > 0
    "
  >
    Выполненных заданий нет (′⌒`)
  </p>
  <p
    v-else-if="
      tasksStore.filter === tasksFilterEnum.UNFINISHED &&
      tasksStore.list.size > 0
    "
  >
    Все задания выполнены \(@^0^@)/
  </p>
  <p v-else>Заданий нет ¯\_(ツ)_/¯</p>
</template>

<style scoped>
.task-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
