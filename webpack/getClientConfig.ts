import { getOutputConfig } from './getOutputConfig';
import { getEntryFiles } from './getEntryFiles';
import { getContext } from './getContext';

export function getClientConfig(rootDir, entryFilesPath) {
  return {
    name: 'client',
    entry: getEntryFiles(rootDir, entryFilesPath, getContext(rootDir, entryFilesPath)),
    output: getOutputConfig(rootDir, 'public'),
  };
}
