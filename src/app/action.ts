'use server';
import prisma from "@/app/lib/db"

export async function Chatbot(formData: FormData) {
  const chatbot = await prisma.chatbot.create({
    data: { 
      name: formData.get('chatbotName') as string,
      description: formData.get('chatbotDescription') as string,
      
    },
  })
  return chatbot
}