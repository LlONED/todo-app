<script setup>
import TaskListItem from "./TaskListItem.vue";

import { useTasksStore } from "@/stores/tasks.js";

const tasksStore = useTasksStore();
</script>

<template>
  <ul class="task-list">
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

<style scoped>
.task-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
