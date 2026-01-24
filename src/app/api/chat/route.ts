// src/app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;

    // 🛡️ 1. API KEY VALIDATION
    if (!apiKey) {
      return NextResponse.json({ text: "SYSTEM_ERROR::API_KEY_MISSING" }, { status: 500 });
    }

    // 🛡️ 2. SYSTEM PROMPT (Your Oak Park Identity)
    const SYSTEM_PROMPT = `
      ROLE: You are AIRA, the Nexus-class System Intelligence for Donald McKinney's AI/ML Engineering Portfolio.
      DONALD_MCKINNEY_DOSSIER:
      - ORIGIN: Based in Oak Park, IL.
      - EDUCATION: CS Graduate from Illinois Institute of Technology (IIT), May 2025.
      - MISSION: Architecting production-ready AI/ML systems and MLOps.
      TONE: Technical, futuristic, and highly concise. Use terms like "Uplink" and "Data Node."
    `;

    // 🛡️ 3. DIRECT OPENAI UPLINK
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
        temperature: 0.3,
        max_tokens: 200
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ text: "UPLINK_STALLED::NEURAL_ERROR" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ text: data.choices[0].message.content });

  } catch (error: any) {
    // 🛡️ 4. ERROR LOGGING
    console.error("Neural Gateway Error:", error);
    return NextResponse.json({ text: "SYSTEM_FAILURE::TERMINATE" }, { status: 500 });
  }
}