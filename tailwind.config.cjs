/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            height: {
                visible: "var(--visible-height)"
            },
            minHeight: {
                visible: "var(--visible-height)"
            }
        },
    },
    plugins: [],
}
