import { NextApiHandler } from "next";
import { todos } from "./store";
import NextCors from "nextjs-cors";

const handler: NextApiHandler = async (req, res) => {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "DELETE") {
    const targetIndex = parseInt(
      Array.isArray(req.query.index)
        ? req.query.index[0]
        : req.query.index ?? "0"
    );

    todos.splice(targetIndex, 1);
    res.status(200).json({ status: "success" });
  } else {
    res.status(404).end();
  }
};

export default handler;
