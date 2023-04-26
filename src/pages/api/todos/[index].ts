import { NextApiHandler } from "next";
import { todos } from "./store";

const handler: NextApiHandler = (req, res) => {
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
