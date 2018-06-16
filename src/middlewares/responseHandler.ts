import { Response } from 'express';

import ApiResult from '@models/ApiResult';
import AppError from '@models/AppError';
import HttpStatus from '@constants/HttpStatus';
import Logger from '@modules/Logger';
import ResponseCode from '@constants/ResponseCode';

export default function responseHandler(payload, response: Response) {
  if (payload === undefined) {
    throw AppError.of({
      type: ResponseCode.RESPONSE_NOT_PROVIDED,
    });
  }

  if (!(payload instanceof ApiResult)) {
    throw AppError.of({
      args: [ payload ],
      type: ResponseCode.RESPONSE_TYPE_NOT_API_RESULT,
    });
  }

  // Set cookie in the response header
  const cookies = payload.getCookies();
  if (cookies.length > 0) {
    Logger.debug('Cookies (%s) is set: %j', cookies.length, cookies);
    payload.getCookies().map((cookie) => {
      response.cookie(cookie.key, cookie.value, {
        httpOnly: true,
        maxAge: cookie.maxAge,
      });
    });
  }

  response.status(HttpStatus.SUCCESS)
    .send({
      code: ResponseCode.SUCCESS.code,
      payload,
    });
};
