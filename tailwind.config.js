module.exports = {
    mode: 'jit',
    purge: [
        './**/*.html',
        './css/**/*.{js,jsx,ts,tsx,vue}',

    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'header': "url('/css/images/header-background.jpg')",
            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}