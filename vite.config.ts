import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "components/*": "src/components/*",
      "theme/*": "src/theme/*",
      "utils/*": "src/utils/*",
      "views/*": "src/views/*",
      "assets/*": "src/assets/*"
    }
  }
})
