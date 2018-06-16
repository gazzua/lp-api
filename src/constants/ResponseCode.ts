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
  };
  
  export default ResponseCode;