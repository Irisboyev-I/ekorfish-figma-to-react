# ekorfish-frontend

Responsive website for [ekorfish.com](https://ekorfish.com), built with **React + Vite + TypeScript + Tailwind CSS**.  
Design comes from Figma, implemented as a modern, fast and scalable frontend project.

---

## 🚀 Tech Stack
- ⚛️ React 18  
- ⚡ Vite  
- 🟦 TypeScript  
- 🎨 Tailwind CSS  

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/ekorfish-frontend.git
cd ekorfish-frontend
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Build for production:

bash
Copy
Edit
npm run build
Preview the production build:

bash
Copy
Edit
npm run preview
🛠 Project Structure
bash
Copy
Edit
src/
├── app/
├── assets/
├── constants/
├── features/
├── hooks/
├── i18n/
├── lib/
├── locale/
├── pages/
├── routes/
├── services/
├── styles/
├── types/
├── App.tsx         # main app component
├── main.tsx        # entry point
└── index.css       # TailwindCSS styles
🎨 Tailwind Setup
Tailwind is already configured.
Main directives are inside src/index.css:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
Configuration file: tailwind.config.js

js
Copy
Edit
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
🌐 Deployment
You can easily deploy this project to:

Vercel

Netlify

GitHub Pages

Cloudflare Pages

Example (Vercel):

bash
Copy
Edit
npm run build
Then deploy dist/ folder.
