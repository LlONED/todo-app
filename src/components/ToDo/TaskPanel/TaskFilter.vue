<script setup>
import { ref, watch } from "vue";
import { tasksFilterEnum } from "@/helpers/constants/tasks";
import { useTasksStore } from "@/stores/tasks.js";

const tasksStore = useTasksStore();
const filter = ref(tasksFilterEnum.ALL);

watch(filter, (v) => tasksStore.updateFilter(v));
</script>

<template>
  <div>
    <input
      v-for="(filterName, index) in tasksFilterEnum"
      :key="index"
      :value="filterName"
      v-model="filter"
      type="radio"
      name="filter"
    />
  </div>
</template>

<style scoped></style>
