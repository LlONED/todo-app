import { TASK_SCHEME } from "./constants/task.js";

export default class DB {
  #incId = 0;
  list = new Map();

  #serializeTask(id, task) {
    return {
      [id]: task,
    };
  }

  #checkTaskExists(id) {
    if (!this.list.has(id)) {
      throw {
        status: 404,
        message: `Task with id ${id} not found`,
      };
    }
  }

  #ckeckValidTaskProperties(target, source, successCallback) {
    for (const taskPropery in source) {
      if (
        target.hasOwnProperty(taskPropery) === false ||
        (target.hasOwnProperty(taskPropery) &&
          typeof target[taskPropery] !== typeof source[taskPropery])
      ) {
        throw {
          status: 400,
          message: `The "${taskPropery}" property does not exist in the task or not valid type. Valid properties: ${Object.keys(
            TASK_SCHEME
          )
            .map((e) => `${e}: ${typeof TASK_SCHEME[e]}`)
            .join(", ")}`,
        };
      } else {
        successCallback(taskPropery);
      }
    }
  }

  async getTasks() {
    return {
      status: 200,
      data: {
        success: true,
        tasks: Array.from(this.list).reduce(
          (acc, [id, task]) => ({ ...acc, ...this.#serializeTask(id, task) }),
          {}
        ),
      },
    };
  }

  async addTask(requestTask) {
    const result = {
      status: 500,
      data: {
        success: false,
        message: "",
      },
    };

    try {
      const id = this.#incId++;
      const task = {};

      this.#ckeckValidTaskProperties(requestTask, TASK_SCHEME, (key) => {
        task[key] = requestTask[key];
      });

      this.list.set(id, task);

      result.status = 201;
      result.data.success = true;
      result.data.message = `Task with id ${id} has been successfully added`;
      result.data.task = this.#serializeTask(id, task);
    } catch (e) {
      console.error(e);

      result.status = e.status;
      result.data.success = false;
      result.data.message = e.message;
    } finally {
      return result;
    }
  }

  async updateTask(id, taskProperties) {
    id = Number(id);

    const result = {
      status: 500,
      data: {
        success: false,
        message: "",
      },
    };

    try {
      this.#checkTaskExists(id);

      const task = this.list.get(id);

      this.#ckeckValidTaskProperties(TASK_SCHEME, taskProperties, (key) => {
        task[key] = taskProperties[key];
      });

      result.status = 202;
      result.data.success = true;
      result.data.message = `Task with id ${id} has been successfully updated`;
      result.data.updatedId = id;
    } catch (e) {
      console.error(e);

      result.status = e.status;
      result.data.success = false;
      result.data.message = e.message;
    } finally {
      return result;
    }
  }

  async deleteTask(id) {
    id = Number(id);

    const result = {
      status: 500,
      data: {
        success: false,
        message: "",
      },
    };

    try {
      this.#checkTaskExists(id);

      this.list.delete(id);

      result.status = 202;
      result.data.success = true;
      result.data.message = `Task with id ${id} has been successfully deleted`;
      result.data.deletedId = id;
    } catch (e) {
      console.error(e);

      result.status = e.status;
      result.data.success = false;
      result.data.message = e.message;
    } finally {
      return result;
    }
  }
}
