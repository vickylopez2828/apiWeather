# Proyecto de Clima con React, TypeScript y Vite

Este proyecto es una aplicación de consulta del clima desarrollada con **React** y **TypeScript**, utilizando **Vite** como herramienta de construcción. La aplicación se conecta a la API de **OpenWeather** para obtener información meteorológica en tiempo real y mostrarla al usuario de una manera intuitiva y moderna.

## Características

- **React + TypeScript:** se desarrolló utilizando las últimas prácticas de React con tipado fuerte de TypeScript para asegurar un código más robusto y fácil de mantener.
- **Vite:** La construcción con Vite garantiza tiempos de carga rápidos y una excelente experiencia de desarrollo.
- **API de OpenWeather:** Se consulta y muestra los datos meteorológicos en tiempo real obtenidos de la API de OpenWeather.
- **CSS Modules:** Se utiliza CSS Modules para asegurar un estilo aislado y sin conflictos entre componentes.
- **Zod:** Para la validación y tipado de los resultados de la API se utilizó Zod, lo que permite un manejo seguro y tipado de los datos recibidos.
- **React Hook Form:** Se manejan y validan los formularios utilizando React Hook Form para una experiencia de usuario fluida y validación eficiente.

Actualmente, dos plugins oficiales están disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expansión de la configuración de ESLint

Si estás desarrollando una aplicación de producción, te recomendamos actualizar la configuración para habilitar reglas de lint con conocimiento de tipos:

- Configura la propiedad `parserOptions` de nivel superior de esta manera:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Reemplaza `plugin:@typescript-eslint/recommended` con `plugin:@typescript-eslint/recommended-type-checked` o `plugin:@typescript-eslint/strict-type-checked`
- Opcionalmente, agrega `plugin:@typescript-eslint/stylistic-type-checked`
- Instala [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y añade `plugin:react/recommended` & `plugin:react/jsx-runtime` a la lista de `extends`
