import * as path from 'path';

export function getOutputConfig(rootDir, outputDir) {
  return {
    filename: '[name].js',
    path: path.join(rootDir, outputDir),
  };
}
