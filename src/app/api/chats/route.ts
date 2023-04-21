import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma";

export async function POST(request: NextRequest) {
  const { name } = await request.json();
  const chat = await prisma.chat.create({
    data: {
      name,
    },
  });

  return NextResponse.json(chat);
}

export async function GET(_request: NextRequest) {
  console.log("veio aqui");
  const chats = await prisma.chat.findMany();
  return NextResponse.json(chats);
}
