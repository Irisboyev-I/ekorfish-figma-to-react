# ekorfish-frontend

Responsive website for [ekorfish.com](https://ekorfish.com), built with **React + Vite + TypeScript + Tailwind CSS**.  
Design comes from Figma, implemented as a modern, fast and scalable frontend project.

---

## 🚀 Tech Stack
- ⚛️ React 18  
- ⚡ Vite  
- 🟦 TypeScript  
- 🎨 Tailwind CSS  
- 📦 PostCSS + Autoprefixer  

---

## 📦 Installation & Setup

Clone the repository:

```
git clone https://github.com/your-username/ekorfish-frontend.git
cd ekorfish-frontend
Install dependencies:
```
```
npm install
Run the development server:
```
```
npm run dev
Build for production:
```
```
npm run build
Preview the production build:
```
```
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
```
```
@tailwind base;
@tailwind components;
@tailwind utilities;
Configuration file: tailwind.config.js
```
```
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
```
```
npm run build
Then deploy dist/ folder.
```