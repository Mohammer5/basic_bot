import * as fs from 'fs';
import * as path from 'path';

export function getNodeModules(rootDir) {
  const nodeModulesPath = path.join(rootDir, 'node_modules');

  return fs
    .readdirSync(nodeModulesPath)
    .filter(name => name !== '.bin')
    .reduce((modules, name) => ((modules[name] = 'commonjs ' + name) && modules), {});
}
