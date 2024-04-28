import { tasksFilterEnum } from "@/helpers/constants/tasks";
import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    /** @type {Map<number, { name: string, description: string, done: boolean }>} */
    list: new Map(),
    /** @type {tasksFilterEnum} */
    filter: tasksFilterEnum.ALL,
  }),
  getters: {
    size(state) {
      return state.list.size;
    },

    filteredTasks(state) {
      return Array.from(state.list).filter(
        ([id, task]) =>
          state.filter === tasksFilterEnum.ALL ||
          (state.filter === tasksFilterEnum.FINISHED && task.done) ||
          (state.filter === tasksFilterEnum.UNFINISHED && !task.done)
      );
    },
  },

  actions: {
    /**
     * @param {number} id
     * @param {string} name
     * @param {string} description
     * @param {boolean} done
     */
    addTask(id, name, description, done) {
      this.list.set(id, {
        name,
        description,
        done,
      });
    },

    /**
     * @param {number} id
     * @param {boolean} done
     */
    updateTaskDone(id, done) {
      const task = this.list.get(id);

      if (task === undefined) {
        throw new Error(`Task ${id} not found`);
      }

      task.done = done;
    },

    /**
     * @param {tasksFilterEnum} filter
     */
    updateFilter(filter) {
      this.filter = filter;
    },

    /**
     * @param {number} id
     */
    removeTask(id) {
      this.list.delete(id);
    },
  },
});
