const path = require('path');
module.exports = {
  webpack: {
    alias: {
      shared: path.resolve(__dirname, './src/shared/index.ts'),
      entities: path.resolve(__dirname, './src/entities/index.ts'),
      processes: path.resolve(__dirname, './src/processes/index.ts'),
      widgets: path.resolve(__dirname, './src/widgets/index.ts'),
      app: path.resolve(__dirname, './src/app/App.tsx'),
    },
  },
};
export {};
