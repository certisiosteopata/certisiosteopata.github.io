module.exports = {
   content: ['content/**/*.md', 'layouts/**/*.html'],
   darkMode: 'class',
   theme: {
      extend: {},
      screens: {
         sm: '900px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
         '2xl': '1536px'
      },
      fontFamily: {
         body: [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji'
         ],
         sans: [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji'
         ]
      }
   },
   plugins: []
};
