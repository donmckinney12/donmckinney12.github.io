import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { text: "ERROR::OPENAI_KEY_MISSING. Verify .env.local." },
      { status: 500 }
    );
  }

  try {
    const { message } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // Optimized for speed
        messages: [
          {
            role: "system",
            content: `You are AIRA, the Nexus AI for Donald McKinney, an AI/ML Engineer from Oak Park, IL. 
            Donald is a 2025 IIT grad specializing in MLOps, Computer Vision, and RAG. 
            Be technical, concise, and futuristic. Mention projects like SkyLink or the AI Brochure Generator. 
            Keep responses under 35 words. Use terminal-style jargon like 'Uplink' and 'Node'.`
          },
          { role: "user", content: message },
        ],
        max_tokens: 60,
        temperature: 0.7,
      }),
      signal: AbortSignal.timeout(10000) // 10-second fail-safe
    });

    const data = await response.json();

    if (data.error) {
      console.error("OPENAI_API_ERROR:", data.error);
      return NextResponse.json(
        { text: `ERROR::${data.error.code || 'API_UPLINK_DENIED'}` },
        { status: 500 }
      );
    }

    const aiText = data.choices?.[0]?.message?.content || "DATA_STREAM_EMPTY";
    return NextResponse.json({ text: aiText });

  } catch (error: any) {
    console.error("NEXUS_UPLINK_CRASH:", error);
    const isTimeout = error.name === 'TimeoutError';
    return NextResponse.json(
      { text: isTimeout ? "ERROR::LATENCY_EXCEEDED" : "ERROR::NODE_CONNECTION_FAILED" },
      { status: 500 }
    );
  }
}