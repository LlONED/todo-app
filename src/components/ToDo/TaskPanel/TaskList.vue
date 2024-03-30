<script setup>
import TaskListItem from "./TaskListItem.vue";

import { useTasksStore } from "@/stores/tasks.js";

const tasksStore = useTasksStore();
</script>

<template>
  <ul>
    <TaskListItem
      v-for="task in tasksStore.filteredTasks"
      :key="task.id"
      :name="task.name"
      :description="task.description"
      :done="task.done"
      @updateDone="tasksStore.updateTaskDone(task.id, $event)"
      @remove="tasksStore.removeTask(task.id)"
    />
  </ul>
</template>

<style scoped></style>
