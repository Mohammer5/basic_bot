import * as fs from 'fs';
import { getContext } from './getContext';
import * as path from 'path';

export function getEntryFiles(rootDir, entryFilePath, context) {
  const dir = getContext(rootDir, entryFilePath);

  return fs
    .readdirSync(dir)
    .filter(name => name.match(/\.tsx?$/))
    .reduce(
      (carry, current) => {
        carry[current.replace(/\.tsx?$/, '')] = path.join(context, current);
        return carry;
      },
      {},
    );
}
