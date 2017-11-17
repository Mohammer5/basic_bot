export function getRequestHeadersPrivate(key, nonce, signature) {
  return {
    'bfx-nonce': nonce,
    'bfx-apikey': key,
    'bfx-signature': signature
  };
}
