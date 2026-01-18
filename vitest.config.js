import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['source/**/*.test.js', 'source/**/*.test.ts'],
    environment: 'happy-dom',
  },
});
