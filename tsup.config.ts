import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
})