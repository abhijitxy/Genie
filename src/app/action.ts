'use server';
import prisma from "@/app/lib/db"

export async function createChatbot(formData: FormData) {
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;

  await prisma.chatbot.create({
    data: { name, description },
  });
}