import * as jwt from 'jsonwebtoken';

import Logger from '@modules/Logger';

export const VERSION = '__version';
const TOKEN_ERROR = {
  TOKEN_CREATE_ERROR: 'TOKEN_CREATE_ERROR',
  TOKEN_DECODE_ERROR: 'TOKEN_DECODE_ERROR',
  TOKEN_INITIALIZE_ERROR: 'TOKEN_INITIALIZE_ERROR',
  TOKEN_NOT_INITIALIZED: 'TOKEN_NOT_INITIALIZED',
};

const state = {
  _initialized: false,
  privateKey: undefined,
  tokenDuration: undefined,
}

export default class Token {
  static [VERSION] = '0.0.1';

  static initialize({
    privateKey,
    tokenDuration,
  }) {
    if (privateKey !== undefined && tokenDuration !== undefined) {
      state.privateKey = privateKey;
      state.tokenDuration = tokenDuration;
      state._initialized = true;
    } else {
      throw Error('Token should be initialized with `private key` and `token duration`');
    }
  }

  static create({
    payload,
  }) {
    if (state._initialized) {
      return new Promise<string>((resolve, reject) => {
        jwt.sign(
          payload,
          state.privateKey,
          { 
            expiresIn: state.tokenDuration,
          },
          (err, token) => {
            if (err) {
              console.error(err);
              reject({ error: TOKEN_ERROR.TOKEN_CREATE_ERROR });
            } else {
              Logger.debug(`Token is generated: %s`, token);
              resolve(token);
            }
          });
      });
    } else {
      throwTokenNotInitializedError();
    }
  }

  static decode({
    token,
  }) {
    if (state._initialized) {
      return new Promise<any>((resolve, reject) => {
        jwt.verify(
          token, 
          state.privateKey, 
          (err, decoded) => {
            if (err) {
              reject({ error: TOKEN_ERROR.TOKEN_DECODE_ERROR });
            } else {
              resolve(decoded);
            }
          }
        );
      });
    } else {
      throwTokenNotInitializedError();
    }
  }
};

function throwTokenNotInitializedError() {
  // todo: remove
  console.log('token error');

  throw new Error(TOKEN_ERROR.TOKEN_NOT_INITIALIZED);
}
