# Enterprise-Grade RAG System

An end-to-end Retrieval-Augmented Generation (RAG) system built with **Python**, **Flask**, and **LangChain**. This application allows users to upload PDF documents and query them using OpenAI's GPT-4o model with local FAISS vector storage.

## 🚀 Features
- **PDF Ingestion**: Uses `PyPDFLoader` to parse documents.
- **Vector Storage**: Local FAISS index for high-speed similarity search.
- **RAG Chain**: Implements `RetrievalQA` for context-aware answering.
- **Modern UI**: Dark-mode enterprise dashboard with real-time feedback.

## 🛠️ Tech Stack
- **Backend**: Flask (Python)
- **AI Framework**: LangChain
- **Embeddings**: OpenAI `text-embedding-3-small`
- **LLM**: OpenAI `gpt-4o`
- **Database**: FAISS (Facebook AI Similarity Search)

## 📦 Installation & Setup
1. **Clone the repo**:
   ```bash
   git clone [https://github.com/your-username/Enterprise-Rag-Project.git](https://github.com/your-username/Enterprise-Rag-Project.git)
   cd Enterprise-Rag-Project