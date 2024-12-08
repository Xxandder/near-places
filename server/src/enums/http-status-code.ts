const HTTPStatusCode = {
    Ok: 200,
    Found: 302,
    BadRequest: 400,
    NotFound: 404,
    MethodNotAllowed: 405,
    RequestTimeout: 408,
    Conflict: 409,
    UnprocessableEntity: 422,
    TooManyRequests: 429,
    InternalServerError: 500,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504
  } as const;

  export { HTTPStatusCode };