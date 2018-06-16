import * as cors from 'cors';

import config from '@config/config';
import Logger from '@modules/Logger';

export default function corsHandler() {
  return [
    // https://github.com/expressjs/cors/issues/71#issuecomment-279661081
    (req, res, next) => {
      req.headers.origin = req.headers.origin || req.headers.host;
      next();
    },
    cors({
      credentials: true,
      origin: function (origin, callback) {
        if (config.cors.whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          /**
           * This should be handled in a different way.
           */
          Logger.warn('Request origin not listed in whitelist: %s', origin);
          callback(null, true);
          // process.env.NODE_ENV === 'development'
          //   ? callback(null, true)
          //   : callback(AppError.ofType(ResponseType.REQUEST_ORIGIN_INVALID, origin));
        }
      },
    }),
  ];
};
