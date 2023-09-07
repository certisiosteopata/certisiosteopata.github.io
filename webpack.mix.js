const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('assets/src/app.js', 'assets')
   .sass('assets/src/app.scss', 'assets')
   .options({
      processCssUrls: false,
      postCss: [tailwindcss('tailwind.config.js')]
   });
