import * as path from 'path';

export function getContext(rootDir, contextPath) {
  return path.join(rootDir, contextPath);
}
