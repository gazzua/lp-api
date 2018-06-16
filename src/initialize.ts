// For TypeORM
import "reflect-metadata";

import Database from '@modules/Database';
import Logger from '@modules/Logger';
import config from '@config/config';
import Token from '@modules/Token';

export default function initialize() {
  Token.initialize({
    privateKey: config.auth.privateKey,
    tokenDuration: config.auth.tokenDuration,
  });

  const conn = Database.initialize();
  conn.then((connections) => {
    Logger.info('Total %d Connections: %j', connections.length, connections.map((c) => {
      return c.options;
    }));
    return connections;
  }).catch((err) => {
    Logger.error('Failed to connect to DB: %o', err);
  });

  return conn;
};
