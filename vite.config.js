import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/UmeshSathsarana_Portfolio/', // මෙතැනට ඔයාගේ Repo එකේ exact නම ලබාදෙන්න
  build: {
    outDir: 'docs' // GitHub Pages වලට docs folder එකෙන් host කරන්න පුළුවන්
  },
  plugins: [react(), tailwindcss()],
})