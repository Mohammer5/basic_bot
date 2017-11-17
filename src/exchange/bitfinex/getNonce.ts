let currentNonce = Date.now();

export function getNonce() {
  return currentNonce++;
}
