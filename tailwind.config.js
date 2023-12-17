/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
/* 
En el Content tenemos que agregar los archivos que 
van a llevar tailwind css, 

para hacer un forma dinamica que decirle que queremos
todos los archivos que un carpeta lo podemos hacer 
de esta manera "./Carpeta/**|*jsx" EL doble asterisco hace
que coja todos los archivos que tiene dentro de esta carpeta
y solo los archivos terminados en .jsx
*/
