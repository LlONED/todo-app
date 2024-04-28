<script setup>
import TaskList from "./TaskList.vue";
import TaskFilter from "./TaskFilter.vue";
</script>

<template>
  <section class="panel">
    <div class="options">
      <h3 class="title">Задачи</h3>

      <TaskFilter />
    </div>

    <TaskList />
  </section>
</template>

<style scoped>
.panel {
  width: 100%;
  margin-top: 52px;
  padding: 12px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: var(--vt-c-black);
}

.options {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 12px;
}

.title {
  color: var(--green-mute);
}
</style>
