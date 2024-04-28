<script setup>
import TaskForm from "@/components/ToDo/TaskForm.vue";
import TaskPanel from "@/components/ToDo/TaskPanel/TaskPanel.vue";
</script>

<template>
  <section class="panel">
    <h1 class="title">TODO App</h1>

    <TaskForm />

    <TaskPanel />
  </section>
</template>

<style scoped>
.title {
  color: var(--green-mute);
  font-size: 2.5rem;
  margin: 26px 0;
}

.panel {
  display: flex;
  flex-direction: column;
  place-items: center;
}
</style>
