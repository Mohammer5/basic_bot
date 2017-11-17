import { apiData } from './apiData';
import * as crypto from 'crypto';

export function getSignature(secret, path, nonce, rawBody) {
  const rawSignature = `/api/${apiData.version}${path}${nonce}${rawBody}`;
  return crypto
    .createHmac('sha384', secret)
    .update(rawSignature)
    .digest('hex');
}
