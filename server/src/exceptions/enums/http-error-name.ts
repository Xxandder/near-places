const HTTPErrorName = {
    OK: 'OK',
    BAD_REQUEST:'Bad Request',
    UNPROCESSABLE_ENTITY: 'Unprocessable Entity',
    TOO_MANY_REQUESTS: 'Too Many Requests',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    BAD_GATEWAY: 'Bad Gateway'
  } as const;

export { HTTPErrorName };