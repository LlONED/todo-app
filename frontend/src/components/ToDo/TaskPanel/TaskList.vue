<script setup>
import { tasksFilterEnum } from "@/helpers/constants/tasks";
import TaskListItem from "./TaskListItem.vue";

import { useTasksStore } from "@/stores/tasks.js";

const tasksStore = useTasksStore();
</script>

<template>
  <ul v-if="tasksStore.filteredTasks.length" class="task-list">
    <TaskListItem
      v-for="[id, task] in tasksStore.filteredTasks"
      :key="id"
      :name="task.name"
      :description="task.description"
      :done="task.done"
      @updateDone="tasksStore.updateTaskDone(id, $event)"
      @remove="tasksStore.removeTask(id)"
    />
  </ul>
  <p
    v-else-if="
      tasksStore.filter === tasksFilterEnum.FINISHED && tasksStore.list.size > 0
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
