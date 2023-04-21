import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const { name } = req.body;
    console.log(req.body);
    const chat = await prisma.chat.create({
      data: {
        name,
      },
    });

    res.json(chat);
  }

  if (req.method == "GET") {
    const chats = await prisma.chat.findMany();
    res.json(chats);
  }

  res.status(405).json({ message: "Not Allowed" });
};

export default handler;
