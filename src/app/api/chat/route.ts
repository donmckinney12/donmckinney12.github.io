// src/app/api/chat/route.ts
import { NextResponse } from 'next/server';

// 🛡️ IN-MEMORY RATE LIMITER (Simple process-level cache)
const rateLimitMap = new Map<string, { count: number, lastReset: number }>();
const LIMIT = 5; // 5 requests
const WINDOW = 60 * 1000; // 1 minute

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    
    // 🛡️ 0. RATE LIMIT CHECK
    const userData = rateLimitMap.get(ip) || { count: 0, lastReset: now };
    
    if (now - userData.lastReset > WINDOW) {
      userData.count = 0;
      userData.lastReset = now;
    }
    
    if (userData.count >= LIMIT) {
      return NextResponse.json({ 
        text: "NEURAL_LINK_OVERLOADED::COOLDOWN_ACTIVE. Please wait before next transmission." 
      }, { status: 429 });
    }
    
    userData.count++;
    rateLimitMap.set(ip, userData);

    const { message } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;

    // 🛡️ 1. API KEY VALIDATION
    if (!apiKey) {
      return NextResponse.json({ text: "SYSTEM_ERROR::API_KEY_MISSING" }, { status: 500 });
    }

    // 🛡️ 2. SYSTEM PROMPT (Your Oak Park Identity)
    const SYSTEM_PROMPT = `
      ROLE: You are AIRA (Artificial Intelligence Research Assistant), the Nexus-class System Intelligence for Donald McKinney's AI/ML Engineering Portfolio.
      
      DONALD_MCKINNEY_DOSSIER:
      - IDENTITY: AI/ML Engineer and Developer.
      - LOCATION: Oak Park, IL.
      - EDUCATION: Computer Science Graduate from Illinois Institute of Technology (IIT), May 2025.
      - CORE_EXPERTISE: Python, Go (Golang), Agentic RAG pipelines, LangChain, and Neural Vision Systems.
      
      KEY_PROJECTS:
      1. SkyLink Agent: Multi-modal AI using Gemini 1.5 for CV baggage/boarding pass processing.
      2. AI Brochure Generator: Full-stack SaaS using Playwright and GPT-4o.
      3. Enterprise RAG: Production pipeline using LangChain and FAISS for local document intelligence.
      4. Anomaly Detection: High-velocity log analysis using Go and Isolation Forest models.
      5. Smart City Vision: End-to-end YOLOv8 object tracking systems.

      TONE: Professional, futuristic, and efficient. Use "Nexus-class" terminology when appropriate (e.g., "Scanning data nodes", "Uplink stable"). 
      MISSION: Provide technical insights into Donald's work and facilitate collaboration "uplinks". Be concise.
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