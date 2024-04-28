import express from "express";
import DB from "../helpers/db.js";

const router = express.Router();
const db = new DB();

router.get("/", async (req, res) => {
  const { status, data } = await db.getTasks();

  res.status(status);
  res.send(data);
});

router.post("/", async (req, res) => {
  const { status, data } = await db.addTask(req.body);

  res.status(status);
  res.send(data);
});

router.patch("/:id", async (req, res) => {
  const { status, data } = await db.updateTask(req.params.id, req.body);

  res.status(status);
  res.send(data);
});

router.delete("/:id", async (req, res) => {
  const { status, data } = await db.deleteTask(req.params.id);

  res.status(status);
  res.send(data);
});

export default router;
