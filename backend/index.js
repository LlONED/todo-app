import express from "express";
import cors from "cors";

import taskRouter from "./router/task.js";

const app = express();
const port = 5987;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRouter);

app.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Start listening on port ${port}`);
});
