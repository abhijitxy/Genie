import { NextResponse,NextRequest } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: NextRequest) {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": "Who won the World Series in 2020?"},
                {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
                {"role": "user", "content": "Where was it played?"}
            ],
            model: "gpt-3.5-turbo",
        });

        console.log(completion.choices[0]);

        return new NextResponse(JSON.stringify(completion.choices[0]), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
