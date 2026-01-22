# 🤖 AI Brochure Generator SaaS

A full-stack AI application that transforms any company website into a high-quality marketing brochure in minutes. Built with a robust Python backend and integrated with cutting-edge LLMs and payment processing.

---

## 🚀 Features
* **Web Scraping**: Utilizes Playwright to deep-scrape company data and service information.
* **AI Copywriting**: Leverages GPT-4o to transform raw website data into persuasive marketing copy.
* **PDF Generation**: Automatically formats and generates professional brochures using FPDF.
* **Stripe Integration**: Secure $15 payment gateway for brochure generation.
* **Production-Ready**: Served via Nginx and Gunicorn for high performance and stability.

## 🛠️ Tech Stack
* **Backend**: Python (Flask)
* **AI Model**: OpenAI GPT-4o
* **Scraper**: Playwright (Chromium)
* **Payment**: Stripe API
* **Server**: Nginx + Gunicorn
* **OS**: Linux (Ubuntu/WSL2)

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/donmckinney12/AI-Brochure-Generator.git](https://github.com/donmckinney12/AI-Brochure-Generator.git)
   cd AI-Brochure-Generator
