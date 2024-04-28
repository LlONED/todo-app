import { defaultRequest } from "../instance";

export function getTasks() {
  return defaultRequest("/tasks").then((data) => data.tasks);
}
