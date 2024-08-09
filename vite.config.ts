import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
// 	base: mode === 'production' ? '/portfolio/' : '/', 
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => ({
	base: mode === 'production' ? '/portfolio/' : '/',
	plugins: [react()],
  }));