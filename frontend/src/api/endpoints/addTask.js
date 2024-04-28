import { defaultRequest } from "../instance";

export function addTask(task) {
  return defaultRequest("/tasks", {
    method: "POST",
    body: JSON.stringify(task),
  }).then((data) => data.task);
}
