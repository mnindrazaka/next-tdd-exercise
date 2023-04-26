import { NextApiHandler } from "next";
import { todos } from "./store";

const handler: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    todos.push({ title: req.body.title });
    res.status(200).json({ status: "success" });
  } else if (req.method === "GET") {
    res.status(200).json({ data: todos });
  } else {
    res.status(404).end();
  }
};

export default handler;
