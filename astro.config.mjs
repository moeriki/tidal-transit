import vercel from '@astrojs/vercel/serverless';
import AstroPWA from '@vite-pwa/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
	adapter: vercel(),
	integrations: [
		AstroPWA({
			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
			manifest: {
				description: 'HOVB description',
				dispaly: 'standalone',
				icons: [
					{
						sizes: '512x512',
						src: 'android/android-launchericon-512-512.png',
						type: 'image/png',
					},
					{
						sizes: '192x192',
						src: 'android/android-launchericon-192-192.png',
						type: 'image/png',
					},
					{
						sizes: '144x144',
						src: 'android/android-launchericon-144-144.png',
						type: 'image/png',
					},
					{
						sizes: '96x96',
						src: 'android/android-launchericon-96-96.png',
						type: 'image/png',
					},
					{
						sizes: '72x72',
						src: 'android/android-launchericon-72-72.png',
						type: 'image/png',
					},
					{
						sizes: '48x48',
						src: 'android/android-launchericon-48-48.png',
						type: 'image/png',
					},
					{
						sizes: '16x16',
						src: 'ios/16.png',
						type: 'image/png',
					},
					{
						sizes: '20x20',
						src: 'ios/20.png',
						type: 'image/png',
					},
					{
						sizes: '29x29',
						src: 'ios/29.png',
						type: 'image/png',
					},
					{
						sizes: '32x32',
						src: 'ios/32.png',
						type: 'image/png',
					},
					{
						sizes: '40x40',
						src: 'ios/40.png',
						type: 'image/png',
					},
					{
						sizes: '50x50',
						src: 'ios/50.png',
						type: 'image/png',
					},
					{
						sizes: '57x57',
						src: 'ios/57.png',
						type: 'image/png',
					},
					{
						sizes: '58x58',
						src: 'ios/58.png',
						type: 'image/png',
					},
					{
						sizes: '60x60',
						src: 'ios/60.png',
						type: 'image/png',
					},
					{
						sizes: '64x64',
						src: 'ios/64.png',
						type: 'image/png',
					},
					{
						sizes: '72x72',
						src: 'ios/72.png',
						type: 'image/png',
					},
					{
						sizes: '76x76',
						src: 'ios/76.png',
						type: 'image/png',
					},
					{
						sizes: '80x80',
						src: 'ios/80.png',
						type: 'image/png',
					},
					{
						sizes: '87x87',
						src: 'ios/87.png',
						type: 'image/png',
					},
					{
						sizes: '100x100',
						src: 'ios/100.png',
						type: 'image/png',
					},
					{
						sizes: '114x114',
						src: 'ios/114.png',
						type: 'image/png',
					},
					{
						sizes: '120x120',
						src: 'ios/120.png',
						type: 'image/png',
					},
					{
						sizes: '128x128',
						src: 'ios/128.png',
						type: 'image/png',
					},
					{
						sizes: '144x144',
						src: 'ios/144.png',
						type: 'image/png',
					},
					{
						sizes: '152x152',
						src: 'ios/152.png',
						type: 'image/png',
					},
					{
						sizes: '167x167',
						src: 'ios/167.png',
						type: 'image/png',
					},
					{
						sizes: '180x180',
						src: 'ios/180.png',
						type: 'image/png',
					},
					{
						sizes: '192x192',
						src: 'ios/192.png',
						type: 'image/png',
					},
					{
						sizes: '256x256',
						src: 'ios/256.png',
						type: 'image/png',
					},
					{
						sizes: '512x512',
						src: 'ios/512.png',
						type: 'image/png',
					},
					{
						sizes: '1024x1024',
						src: 'ios/1024.png',
						type: 'image/png',
					},
				],
				name: 'HOVB',
				short_name: 'HOVB',
				theme_color: '#fff',
			},
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{css,html,ico,js,png}'],
			},
		}),
	],
	output: 'server',
});
