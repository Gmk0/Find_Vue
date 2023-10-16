import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        }
        return `rgb(var(${variableName}))`
    }
}

export default {

    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            textColor: {
                skin: {
                    base: withOpacity('--color-text-base'),
                    muted: withOpacity('--color-text-muted'),
                    inverted: withOpacity('--color-text-inverted'),
                }
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
                "extra-spin-slow": "spin 20s linear infinite",
            },
            backgroundColor: {
                skin: {
                    fill: withOpacity('--color-fill'),
                    'button-accent': withOpacity('--color-button-accent'),
                    'button-accent-hover': withOpacity('--color-button-accent-hover'),
                    'button-muted': withOpacity('--color-button-muted'),
                }
            },
            gradientColorStops: {
                skin: {
                    hue: withOpacity('--color-fill'),
                },
            },
        },
    },

    plugins: [forms, typography, require('flowbite/plugin'),
        require('daisyui')],
};
