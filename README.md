🎮 GameHub

GameHub is a fully functional video game discovery web application built with React, TypeScript, and Vite. It allows users to explore, search, and filter games by platform, genre, and more using the RAWG Video Games Database API. 

✨ Features

🔍 Search Games – Find games by title, platform, or genre.
🎨 Responsive UI – Modern, clean, and fully responsive design.
⚡ Fast & Optimized – Built with Vite for blazing-fast development and build times.
📂 Type-Safe Codebase – Written entirely in TypeScript for maintainability and reliability.
🌐 API Integration – Fetches real-time game data from the RAWG API.
🖥️ Filter Options – Filter games by platform (PC, PlayStation, Xbox, etc.) and genre (RPG, Action, Indie, etc.).
🛠️ Reusable Components – Clean component architecture for scalability.
💡 State Management – Uses React hooks for efficient state handling.

🛠️ Tech Stack
Frontend: React, TypeScript, Vite
Styling: CSS / Tailwind (if styled with Tailwind)
API: RAWG Video Games Database API
Tooling: ESLint, Prettier (if configured)

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/ChethanaMarasinghe/game-hub.git
cd game-hub

2️⃣ Install Dependencies
npm install

3️⃣ Get a RAWG API Key
Create a free account at RAWG.io
Generate an API key.

4️⃣ Configure the API Key
Open src/services/api-client.ts and replace YOUR_API_KEY_HERE with your RAWG API key:

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "YOUR_API_KEY_HERE",
  },
});

5️⃣ Run the Development Server
npm run dev


Visit http://localhost:5173
 in your browser.

🌍 Deployment

GameHub can be deployed to platforms like Vercel, Netlify, or GitHub Pages:
npm run build

Follow your chosen platform’s deployment guide to publish the app.
