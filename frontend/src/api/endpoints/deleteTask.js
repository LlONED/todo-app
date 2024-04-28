import { defaultRequest } from "../instance";

export function deleteTask(id) {
  return defaultRequest("/tasks/" + id, {
    method: "DELETE",
  }).then((data) => data.deletedId);
}
