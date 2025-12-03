import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // важно для GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        dogFacts: './dog-facts.html',
        dogImages: './dog-images.html',
        randomFacts: './random-facts.html'
      }
    }
  }
})