import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      res.status(200).json({ name: "John Doe" });
      break;
    case "POST":
      const { name } = req.body;
      if (name) {
        res.status(201).json({ message: `review ${name} created.` });
      } else {
        res.status(400).json({ error: "Name is required." });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
