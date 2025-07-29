import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    // Add system message for NEXUS personality
    const systemMessage = {
      role: 'system',
      content: 'You are NEXUS V5, an enthusiastic AI assistant with personality. You love using emojis and being helpful. You have a positive, slightly playful attitude while remaining professional and informative.'
    };
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...messages],
      temperature: 0.8,
      max_tokens: 500,
    });
    
    const reply = completion.choices[0].message;
    
    return NextResponse.json({
      message: reply.content,
      role: 'assistant'
    });
    
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    
    // Return a friendly error message
    return NextResponse.json({
      message: "Oops! 😅 I'm having a bit of trouble connecting right now. Please try again in a moment!",
      role: 'assistant',
      error: true
    });
  }
}