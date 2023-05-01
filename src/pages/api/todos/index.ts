import { NextApiHandler } from "next";
import { todos } from "./store";
import NextCors from "nextjs-cors";

const handler: NextApiHandler = async (req, res) => {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "POST") {
    todos.push({ title: JSON.parse(req.body).title });
    res.status(200).json({ status: "success" });
  } else if (req.method === "GET") {
    res.status(200).json({ data: todos });
  } else {
    res.status(404).end();
  }
};

export default handler;
