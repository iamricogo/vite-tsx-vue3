/*
 * @Author: Rico
 * @Date: 2021-07-31 11:32:44
 * @LastEditors: Rico
 * @LastEditTime: 2021-08-02 13:18:59
 * @Description:
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' //支持jsx写法
import eslintPlugin from 'vite-plugin-eslint' //保存时执行eslint
import viteStylelint from '@amatlash/vite-plugin-stylelint'
import styleImport from 'vite-plugin-style-import' //组件按需引入

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue(),
    vueJsx({ transformOn: true, enableObjectSlots: true }),
    eslintPlugin({ fix: true }),
    viteStylelint(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          }
        },
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style`
          }
        },
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${name}.scss`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  }
})
