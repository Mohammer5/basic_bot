import { getNodeModules } from './getNodeModules';
import { getOutputConfig } from './getOutputConfig';
import { getEntryFiles } from './getEntryFiles';
import { getContext } from './getContext';

export function getServerConfig(rootDir, entryFilesPath) {
  return {
    name: 'server',
    entry: getEntryFiles(rootDir, entryFilesPath, getContext(rootDir, entryFilesPath)),
    output: getOutputConfig(rootDir, 'dist'),
    target: 'node',
    externals: getNodeModules(rootDir),
  };
}
