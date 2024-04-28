import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.sendStatus(200);
});

router.post("/", async (req, res) => {
  res.sendStatus(201);
});

router.patch("/:id", async (req, res) => {
  res.sendStatus(202);
});

router.delete("/:id", async (req, res) => {
  res.sendStatus(202);
});

export default router;
