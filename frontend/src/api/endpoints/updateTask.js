import { defaultRequest } from "../instance";

export function updateTask(id, taskProps) {
  return defaultRequest("/tasks/" + id, {
    method: "PATCH",
    body: JSON.stringify(taskProps),
  }).then((data) => data.updatedId);
}
