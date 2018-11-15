import fs from 'fs';
import typescript from 'rollup-plugin-typescript2';

const inputs = fs
  .readdirSync('src')
  .filter(file => !file.endsWith('.d.ts'))
  .map(file => file.slice(0, -3));

export default inputs.map(input => ({
  input: `src/${input}.ts`,
  output: [{
    file: `lib/${input}.js`,
    format: 'cjs',
  }, {
    file: `lib/${input}.mjs`,
    format: 'es',
  }],
  plugins: [
    typescript(),
  ],
  // Make all dependencies external
  external: () => true,
}));
