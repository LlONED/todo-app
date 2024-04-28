<script setup>
import { ref } from "vue";

import IconTrash from "@/components/icons/IconTrash.vue";
import { useTasksStore } from "@/stores/tasks.js";
import { deleteTask, updateTask } from "@/api";

const emit = defineEmits(["updateDone", "remove"]);

const { id, name, description, done } = defineProps({
  id: {
    type: Number,
    requried: true,
  },
  name: {
    type: String,
    requried: true,
  },
  description: {
    type: String,
    requried: true,
  },
  done: {
    type: Boolean,
    requried: true,
  },
});

const tasksStore = useTasksStore();

const loading = ref(false);

function remove() {
  loading.value = true;

  deleteTask(id)
    .then((deletedId) => {
      tasksStore.removeTask(deletedId);
    })
    .catch((e) => alert(e))
    .finally(() => {
      loading.value = false;
    });
}

function updateDone(taskDone) {
  loading.value = true;

  updateTask(id, {
    done: taskDone,
  })
    .then((updatedId) => {
      tasksStore.updateTaskDone(updatedId, taskDone);
    })
    .catch((e) => {
      tasksStore.updateTaskDone(id, !taskDone);
      alert(e);
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>

<template>
  <li :class="['task', { done, loading }]">
    <div class="task-options">
      <BaseInputCheckbox
        @change="updateDone"
        :checked="done"
        :disabled="loading"
        class="task-checkbox"
      />

      <h4 class="task-name">{{ name }}</h4>

      <BaseButton
        @click="remove"
        :disabled="loading"
        danger
        class="task-remove"
      >
        <IconTrash height="20" class="trash-icon" />
      </BaseButton>
    </div>

    <p v-html="description" class="task-description"></p>
  </li>
</template>

<style scoped>
.task {
  opacity: 1;
  list-style: none;
  width: 100%;

  padding: 12px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  background-color: var(--vt-c-black-mute);
  transition: 0.2s opacity ease;
}

.task-options {
  display: flex;
  justify-content: space-between;
}

.task-name {
  max-width: 70%;
  overflow-wrap: break-word;
}

.task-checkbox {
  width: 28px;
  height: 28px;
}

.task-remove {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid var(--color-border);

  display: flex;
  justify-content: center;
  align-items: center;
}

.task-description {
  overflow-wrap: break-word;
}

.done {
  opacity: 0.8;
  text-decoration: line-through;
  transition: 0.2s opacity ease;
}

.loading {
  pointer-events: none;
  opacity: 0.5;
  transition: 0.2s opacity ease;
}
</style>
