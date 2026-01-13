/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                royal: {
                    400: '#60a5fa', // Lighter accent
                    500: '#3b82f6', // Main accent (Buttons)
                    600: '#2563eb', // Darker accent
                    900: '#1e3a8a', // Deep blue
                },
                midnight: {
                    950: '#020617', // Main background (Darker than black-blue)
                    900: '#0f172a', // Card background
                    800: '#1e293b', // Borders/Lighter BG
                    700: '#334155', // Muted text
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'pulse': 'pulse 10s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
