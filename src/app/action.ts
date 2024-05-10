'use server';

import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import prisma from "@/app/lib/db"


export async function continueConversation(messages: CoreMessage[]) {
  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
  });

  const stream = createStreamableValue(result.textStream);
  return stream.value;
}

export async function Chatbot(formData: FormData) {
  const chatbot = await prisma.chatbot.create({
    data: { 
      name: formData.get('chatbotName') as string,
      description: formData.get('chatbotDescription') as string,
      
    },
  })
  return chatbot
}