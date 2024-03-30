import { tasksFilterEnum } from "@/helpers/constants/tasks";
import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    /** @type {{ id: number, name: string, description: string, done: boolean }[]} */
    list: [],
    /** @type {tasksFilterEnum} */
    filter: tasksFilterEnum.ALL,
    incId: 0,
  }),
  getters: {
    filteredTasks(state) {
      return state.list.filter(
        (task) =>
          state.filter === tasksFilterEnum.ALL ||
          (state.filter === tasksFilterEnum.FINISHED && task.done) ||
          (state.filter === tasksFilterEnum.UNFINISHED && !task.done)
      );
    },
  },

  actions: {
    /**
     * @param {string} name
     * @param {string} description
     */
    addTask(name, description) {
      this.list.push({
        id: this.incId++,
        done: false,
        name,
        description,
      });
    },

    /**
     * @param {number} id
     * @param {boolean} done
     */
    updateTaskDone(id, done) {
      const task = this.list.find((task) => task.id === id);

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
      const taskIndex = this.list.findIndex((task) => task.id === id);

      if (taskIndex === -1) {
        throw new Error(`Task ${id} not found`);
      }

      this.list.splice(taskIndex, 1);
    },
  },
});
