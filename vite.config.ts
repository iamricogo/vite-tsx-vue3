/*
 * @Author: Rico
 * @Date: 2021-07-31 11:32:44
 * @LastEditors: Rico
 * @LastEditTime: 2021-07-31 23:40:50
 * @Description:
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({ transformOn: true, enableObjectSlots: true }),
    eslintPlugin({ fix: true })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  }
})
