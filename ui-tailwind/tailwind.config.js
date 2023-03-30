/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Conteúdo da nossa aplicação onde vai conter o nosso estilo tailwindcss
    // Vamos dizer que todo o nosso App/** que termina com tsx vai ter o estilo tailwindcss
    './src/**/*.tsx'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
