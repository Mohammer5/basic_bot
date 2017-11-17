import { Promise } from 'bluebird';
import { apiData } from './apiData';
import { getNonce } from './getNonce';
import { getSignature } from './getSignature';
import * as rp from 'request-promise';
import { getRequestHeadersPrivate } from './getRequestHeadersPrivate';

interface IMakeRequestPrivateOptions {
  key: string;
  secret: string;
  path: string;
  payload?: object;
}

function getRequestOptions(key, secret, url, path, nonce, body, payload) {
  return {
    url,
    method: 'POST',
    headers: getRequestHeadersPrivate(
      key,
      nonce,
      getSignature(secret, path, nonce, body)
    ),
    body: payload,
    json: true
  };
}

function makeRequest(onSuccess, onError) {
  return key => !key ? onError(`An api key must be provided, received "${key}"`) :
    secret => !secret ? onError(`An api secret must be provided, received "${secret}"`) :
      path => !path ? onError(`An api secret must be provided, received "${path}"`) :
        (payload) => {
          const url = `${apiData.url}/${apiData.version}/${path}`;
          const nonce = JSON.stringify(getNonce());
          const body = JSON.stringify(payload);
          return rp(getRequestOptions( key, secret, url, path, nonce, body ))
            .then(onSuccess);
        }
}

export function makeRequestPrivate({
  key,
  secret,
  path,
  payload = {},
}: IMakeRequestPrivateOptions) {
  return new Promise(
    (resolve, reject) =>
      makeRequest(resolve, reject)(key)(secret)(path)(payload),
  );
}
