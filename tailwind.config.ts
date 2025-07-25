import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssForms from "@tailwindcss/forms";
import tailwindcssTypography from "@tailwindcss/typography";
import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";
export default {
	darkMode: "class",
	content: [
		  "./src/app/**/*.{js,ts,jsx,tsx}",
    	"./src/components/**/*.{js,ts,jsx,tsx}",
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
				sans: ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				heading: ['Poppins', 'Raleway', 'ui-sans-serif', 'sans-serif'],
				body: ['Raleway', 'ui-sans-serif', 'sans-serif'],
       
      		},
			colors: {
				primary: {
				  DEFAULT: "#4F46E5",
				  foreground: "#FFFFFF",
				},
				secondary: {
				  DEFAULT: "#F59E0B",
				  foreground: "#1F2937",
				},
				accent: {
				  DEFAULT: "#10B981",
				  foreground: "#FFFFFF",
				},
				muted: {
				  DEFAULT: "#F3F4F6",
				  foreground: "#6B7280",
				},
				background: "#FFFFFF",
				foreground: "#1F2937",
				border: "#E5E7EB",
				input: "#F9FAFB",
				destructive: {
				  DEFAULT: "#EF4444",
				  foreground: "#FFFFFF"
				},
				honey: {
					50: '#FFF8E1',
					100: '#FFE8A3',
					200: '#FFD85E',
					300: '#FDCB3A',
					400: '#ECB02F',
					500: '#D8931F',
					600: '#C1780A',
					700: '#A66400',
				  },
			  },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Fade in
				fadeIn: {
				  from: { opacity: '0' },
				  to: { opacity: '1' },
				},
				// Fade out
				fadeOut: {
				  from: { opacity: '1' },
				  to: { opacity: '0' },
				},
				// Slide in từ dưới lên
				slideUp: {
				  from: { transform: 'translateY(100%)', opacity: '0' },
				  to: { transform: 'translateY(0)', opacity: '1' },
				},
				// Slide in từ trên xuống
				slideDown: {
				  from: { transform: 'translateY(-100%)', opacity: '0' },
				  to: { transform: 'translateY(0)', opacity: '1' },
				},
				// Slide in từ trái
				slideLeft: {
				  from: { transform: 'translateX(-100%)', opacity: '0' },
				  to: { transform: 'translateX(0)', opacity: '1' },
				},
				// Slide in từ phải
				slideRight: {
				  from: { transform: 'translateX(100%)', opacity: '0' },
				  to: { transform: 'translateX(0)', opacity: '1' },
				},
				// Zoom in
				zoomIn: {
				  from: { transform: 'scale(0.95)', opacity: '0' },
				  to: { transform: 'scale(1)', opacity: '1' },
				},
				// Zoom out
				zoomOut: {
				  from: { transform: 'scale(1.1)', opacity: '1' },
				  to: { transform: 'scale(1)', opacity: '0' },
				},
				// Spin nhẹ (custom)
				slowSpin: {
				  '0%': { transform: 'rotate(0deg)' },
				  '100%': { transform: 'rotate(360deg)' },
				},
				// Pulse nhẹ
				pulseLight: {
				  '0%, 100%': { opacity: '1' },
				  '50%': { opacity: '0.5' },
				},
				bounceIn: {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'60%': { transform: 'scale(1.05)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				  },
				  shake: {
					'10%, 90%': { transform: 'translateX(-1px)' },
					'20%, 80%': { transform: 'translateX(2px)' },
					'30%, 50%, 70%': { transform: 'translateX(-4px)' },
					'40%, 60%': { transform: 'translateX(4px)' },
				  },
				  scaleBounce: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				  },
				  slideFadeInUp: {
					'0%': {
					  opacity: '0',
					  transform: 'translateY(20px)',
					},
					'100%': {
					  opacity: '1',
					  transform: 'translateY(0)',
					},
				  },
			  },
			  animation: {
				fadeIn: 'fadeIn 0.5s ease-out',
				fadeOut: 'fadeOut 0.5s ease-in',
				slideUp: 'slideUp 0.5s ease-out',
				slideDown: 'slideDown 0.5s ease-out',
				slideLeft: 'slideLeft 0.5s ease-out',
				slideRight: 'slideRight 0.5s ease-out',
				zoomIn: 'zoomIn 0.3s ease-out',
				zoomOut: 'zoomOut 0.3s ease-in',
				slowSpin: 'slowSpin 3s linear infinite',
				pulseLight: 'pulseLight 2s ease-in-out infinite',
				bounceIn: 'bounceIn 0.4s ease-out',
				shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
				scaleBounce: 'scaleBounce 1.5s infinite ease-in-out',
				slideFadeInUp: 'slideFadeInUp 0.6s ease-out',
				
 
			  }
		}
	},
	plugins: [
		tailwindcssAnimate,
		tailwindcssForms,
		tailwindcssTypography,
		tailwindcssAspectRatio,
	],
} satisfies Config;
