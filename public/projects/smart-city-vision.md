🏙️ Smart City Vision: AI-Powered Object Tracker
An end-to-end computer vision application that detects urban objects (people, vehicles) using YOLOv8, served via a Flask API, and fully containerized with Docker.

🌐 Live Interactive Demo
Click here to view the Live System (Note: The live demo uses a client-side mock of the YOLOv8 inference engine for presentation purposes.)

🚀 Technical Overview
Core Model: YOLOv8 (Ultralytics) for real-time object detection.

Backend: Flask (Python 3.11) with Dockerized networking.

Frontend: Modern CSS Dashboard with AJAX for seamless AI inference.

Deployment: Containerized via Docker and hosted on GitHub Pages for the web interface.

🛠️ Setup & Usage (Local Execution)
Build: docker build -t smart-city-vision .

Run: docker run --rm -p 5000:5000 --name smart-city-container smart-city-vision.

Access: Open http://127.0.0.1:5000.

👨‍💻 AI/ML Engineer Profile
Donald McKinney - Oak park, IL Certifications: Generative AI, Python for Data Science, Cloud Computing, Software Engineering, Linux Commands & Shell Scripting.