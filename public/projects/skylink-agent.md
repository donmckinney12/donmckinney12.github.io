# ✈️ SkyLink: Multi-modal AI Airline Agent

An enterprise-grade customer support agent built with **Gemini 1.5 Flash** and **Streamlit**. This project demonstrates an agentic workflow capable of processing text and images while executing real-world tools via function calling.

## 🚀 Key Features
- **Multi-modal Perception:** Users can upload photos of baggage tags or boarding passes. The agent uses computer vision to extract PNR codes and flight numbers.
- **Autonomous Function Calling:** The agent determines when to call internal Python tools (e.g., `track_baggage`, `get_flight_status`) based on user intent.
- **Proactive System Instructions:** Hard-coded professional personas to ensure brand-compliant interactions.

## 🛠️ Tech Stack
- **Language:** Python 3.10+
- **AI Orchestration:** Google Gemini API (1.5 Flash)
- **UI Framework:** Streamlit
- **IDE:** PyCharm

## 📦 Installation & Setup
1. **Clone the repo:**
   ```bash
   git clone [https://github.com/your-username/airline-multimodal-agent.git](https://github.com/your-username/airline-multimodal-agent.git)