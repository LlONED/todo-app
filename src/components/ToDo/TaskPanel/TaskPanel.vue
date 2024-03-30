<script setup>
import TaskList from "./TaskList.vue";
import TaskFilter from "./TaskFilter.vue";
</script>

<template>
  <section>
    <div>
      <h3>Задачи</h3>

      <TaskFilter />
    </div>

    <TaskList />
  </section>
</template>

<style scoped></style>
