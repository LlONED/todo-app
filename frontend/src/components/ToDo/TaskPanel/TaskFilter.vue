<script setup>
import { ref, watch } from "vue";
import { tasksFilterEnum } from "@/helpers/constants/tasks";
import { useTasksStore } from "@/stores/tasks.js";

const tasksStore = useTasksStore();
const filter = ref(tasksFilterEnum.ALL);

watch(filter, (v) => tasksStore.updateFilter(v));
</script>

<template>
  <div class="filter">
    <BaseInputRadio
      v-for="(filterName, index) in tasksFilterEnum"
      :key="index"
      :value="filterName"
      v-model="filter"
      type="radio"
      name="filter"
    />
  </div>
</template>

<style scoped>
.filter {
  padding: 8px;
  border-radius: 4px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  background-color: var(--vt-c-black-mute);

  outline: 1px solid var(--color-border);
  transition: 0.1s outline ease;
}

.filter:focus-within {
  outline: 2px solid var(--color-border-hover);
  transition: 0.1s outline ease;
}
</style>
