# nextjs-tailwindcss-typescript starter

next.js template including tailwindcss with typescript

**Features**

- Includes Tailwindcss
- Includes postcss-preset-env
- now uses tailwindcss 1.4.x purge method on production builds
- allow to use @apply directive in styled-jsx tags
- stylelint for linting CSS

## usage

1. Clone this repo
2. yarn install
3. yarn dev

## notes

**styles/index.css**
The styles/index.css files includes tailwindcss imports and also supports global styles. It is processed by postcss and with postcss-preset-env supports nesting and other cool stuff.

**postcss.config.js**
The configuration file for postcss. The purgecss plugin is configured to scan the \*.js files in the pages/ and components/ folder.

**tailwind.config.js**
You should know that file, its the default config generated with `npx tailwindcss init`. It's where your tailwindcss config goes.

**pages/\_app.js**
Here we integrate `styles/index.css` into the app.

## VS Code
- Comes with basic vs code config
- Recommended extensions "Tailwind CSS Intellisense" and "stylelint"
