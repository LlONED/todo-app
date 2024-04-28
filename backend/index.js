import express from "express";
import cors from "cors";

const app = express();
const port = 5987;

app.use(cors());

app.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Start listening on port ${port}`);
});
