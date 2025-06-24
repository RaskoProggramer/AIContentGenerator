
# 📚 AI Educational Content Generator

This project is an AI-powered tool for generating educational content such as explanations, quizzes, lesson plans, comparisons, and real-world applications based on a topic and difficulty level.

## ✨ Features

- Generate different types of educational content using an AI API
- Filter inappropriate language
- Display generation time in a human-readable format
- Download results as PDF
- Easily customizable with your own prompts or models

---

## 🧰 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **AI Integration**: Google AI Studio (Gemini) or Cohere API
- **Environment Config**: `.env` for API key

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/RaskoProggramer/AIContentGenerator.git
cd ai-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your `.env` file

Create a `.env` file in the `server/` directory:

```
PORT=3000
GEMINI_API_KEY=your_google_ai_api_key_here

> 🛑 **IMPORTANT:** Never commit your `.env` file to version control.

### 4. Start the server

```bash
node server/server.js
```

You should see:

```
Server running on port 3000
```

---

## 🌐 Usage

1. Open `index.html` in your browser.
2. Enter a topic, select a difficulty level and content type.
3. Click **Generate**.
4. View the AI-generated output.
5. Click **Download** to save the output as a PDF.

---

## 🛡️ Filtering & Safety

The app includes a basic profanity filter. Inappropriate responses from the AI will be blocked and not shown to the user.

---

## 📦 Folder Structure

```
AIGenerator/
├── client/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── server/
│   ├── server.js
│   └── .env
├── node_modules/
├── package.json
└── README.md
```

---
