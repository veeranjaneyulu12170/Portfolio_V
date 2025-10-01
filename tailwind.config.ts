import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		
		extend: {
			fontFamily: {
			  pressStart: ['Press Start 2P', 'cursive'],
			  lobster: ['Lobster', 'cursive']
			},
			colors: {
			  /* your color config */
			},
			borderRadius: {
			  lg: 'var(--radius)',
			  md: 'calc(var(--radius) - 2px)',
			  sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
			  'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' }
			  },
			  'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' }
			  },
			  'fade-in': {
				'0%': { opacity: '0', transform: 'translateY(20px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			  },
			  'scale-in': {
				'0%': { opacity: '0', transform: 'scale(0.9)' },
				'100%': { opacity: '1', transform: 'scale(1)' }
			  },
			  'float': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-10px)' }
			  },
			  // 👇 Add these
			  typewriter: {
				from: { width: '0' },
				to: { width: '100%' },
			  },
			  blink: {
				'50%': { borderColor: 'transparent' },
			  },
			},
			animation: {
			  'accordion-down': 'accordion-down 0.2s ease-out',
			  'accordion-up': 'accordion-up 0.2s ease-out',
			  'fade-in': 'fade-in 0.6s ease-out',
			  'scale-in': 'scale-in 0.4s ease-out',
			  'float': 'float 3s ease-in-out infinite',
			  // 👇 Add these
			  typewriter1: 'typewriter 1.5s steps(10) 0.5s forwards, blink 0.75s step-end infinite',
			  typewriter2: 'typewriter 1s steps(2) 2.2s forwards, blink 0.75s step-end infinite',
			  typewriter3: 'typewriter 2s steps(8) 3.2s forwards, blink 0.75s step-end infinite',
			},
			backgroundImage: {
			  'gradient-primary': 'var(--gradient-primary)',
			  'gradient-warm': 'var(--gradient-warm)',
			  'gradient-hero': 'var(--gradient-hero)'
			},
			boxShadow: {
			  'soft': 'var(--shadow-soft)',
			  'medium': 'var(--shadow-medium)',
			  'strong': 'var(--shadow-strong)'
			}
		  }
		  
	},
	plugins: [animate],
} satisfies Config;
