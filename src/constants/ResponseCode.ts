const ResponseCode = {
    INITIALIZATION_ERROR: {
      code: 500000,
      desc: 'App is not initialized',
      label: 'INITIALIZATION_ERROR',
    },
    NOT_ERROR_OBJECT: {
      code: 401006,
      desc: 'Not error object',
      label: 'NOT_ERROR_OBJECT',
    },
    RESPONSE_TYPE_NOT_API_RESULT: {
        code: 400001,
        desc: 'Internal Error has occurred',
        label: 'RESPONSE_TYPE_NOT_API_RESULT',
    },
    RESPONSE_NOT_PROVIDED: {
      code: 404002,
      desc: 'Request is routed but did not get the response',
      label: 'RESPONSE_NOT_PROVIDED',
    },
    SUCCESS: {
      code: 200000,
      desc: 'SUCCESS',
      label: 'SUCCESS',
    },
    USER_CREDENTIAL_INVALID: {
      code: 401001,
      desc: 'user credential is invalid',
      label: 'USER_CREDENTIAL_INVALID',
    },
    USER_NOT_FOUND: {
      code: 401000,
      desc: 'User is not found, email',
      label: 'USER_NOT_FOUND',
    },
    USER_ALREADY_REGISTERED: {
      code: 401004,
      desc: 'username is already registered',
      label: 'USER_ALREADY_REGISTERED',
    },
    USER_ALREADY_VOTE : {
      code: 401005,
      desc: 'user is already vote',
      label: 'USER_ALREADY_VOTE',
    }
  };
  
export default ResponseCode;