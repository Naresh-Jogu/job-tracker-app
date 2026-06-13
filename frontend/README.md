# 🎯 Job Tracker App

A full-stack MERN application to track job applications with an AI-powered resume analyzer.

## 🔗 Live Demo

- Frontend: [Coming Soon - Vercel]
- Backend: [Coming Soon - Render]

## ✨ Features

- **Authentication** — Secure JWT-based login and registration
- **Job Tracking** — Add, update, and delete job applications
- **Kanban Board** — Visual pipeline: Applied → Interview → Offer → Rejected
- **Stats Dashboard** — Real-time counts of your application status
- **Platform Tracking** — Track where you applied (LinkedIn, Naukri, etc.)
- **AI Resume Analyzer** — Paste your resume + job description and get AI-powered feedback using Gemini API

## 🛠️ Tech Stack

**Frontend**

- React.js + Vite
- Tailwind CSS
- React Router v6
- Context API for state management

**Backend**

- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Google Gemini AI API

## 📁 Project Structure

job-tracker/

├── frontend/ # React + Vite frontend

│ └── src/

│ ├── components/

│ ├── pages/

│ ├── context/

│ └── utils/

└── backend/ # Node.js + Express backend

├── controllers/

├── models/

├── routes/

└── middleware/

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account
- Google Gemini API key

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

MONGO_URI=your_mongodb_connection_string

PORT=3000

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 📸 Screenshots

[Add screenshots here]

## 👨‍💻 Author

**Naresh Jogu**

- LinkedIn: [linkedin.com/in/naresh-jogu-mern](https://www.linkedin.com/in/naresh-jogu-mern)
- GitHub: [github.com/Naresh-Jogu](https://github.com/Naresh-Jogu)
