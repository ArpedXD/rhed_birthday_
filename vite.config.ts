import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/rhed_birthday_/",
  plugins: [
    tailwindcss(),
  ],
})