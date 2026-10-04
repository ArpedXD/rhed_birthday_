import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path";

export default defineConfig({
  base: "/rhed_birthday_/",
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        final: resolve(__dirname, "final.html"),
        game: resolve(__dirname, "game.html"),
      },
    },
  },
})