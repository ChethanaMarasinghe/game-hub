🎮 GameHub

GameHub is a video game discovery web application built with React + TypeScript + Vite.
It allows users to search, filter, and explore games by platform, genre, and more, leveraging the RAWG Video Games Database API
This project was created as part of the Ultimate React Course by Mosh Hamedani and extended into a functional, production-ready application.

✨ Features

🔍 Search Games – Find games by title, platform, or genre.
🎨 Responsive UI – Clean, modern, and fully responsive design.
⚡ Fast & Optimized – Built with Vite for lightning-fast development and build times.
📂 Type-Safe Codebase – Written in TypeScript for maintainability.
🌐 API Integration – Fetches real-time game data from the RAWG API.
🖥️ Filter Options – Narrow down results by platform (PC, PlayStation, Xbox, etc.) and genre (RPG, Action, Indie, etc.).

🛠️ Tech Stack
Frontend: React, TypeScript, Vite
Styling: CSS / Tailwind (if you’ve styled with Tailwind)
API: RAWG API
Tooling: ESLint, Prettier (if configured)

🚀 Getting Started
Follow these steps to run the project locally:

1️⃣ Clone the Repository
git clone https://github.com/your-username/game-hub.git
cd game-hub

2️⃣ Install Dependencies
npm install

3️⃣ Get an API Key
Create a free account at RAWG.io
Generate an API Key

4️⃣ Configure the API Key
Open src/services/api-client.ts and replace YOUR_API_KEY_HERE with your RAWG API key:

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "YOUR_API_KEY_HERE"
  }
});

5️⃣ Run the Development Server
npm run dev


Visit http://localhost:5173/
 in your browser.


🌍 Deployment

You can deploy GameHub easily to services like:

Vercel
Netlify
GitHub Pages

Run:
npm run build


Then follow the deployment guide for your chosen platform.
