export const HTTP_OK = {
  CODE: 200,
  MESSAGE: 'Ok',
};

export const HTTP_CREATED = {
  CODE: 201,
  MESSAGE: 'Created',
};

export const HTTP_BAD_REQUEST = {
  CODE: 400,
  MESSAGE: 'Invalid validation',
};

export const HTTP_NOT_FOUND = {
  CODE: 404,
  MESSAGE: 'Server can not find requested resource',
};
export const HTTP_CONFLICT = {
  CODE: 409,
  MESSAGE: 'Resource already exist',
};

export const HTTP_FAILED_DEPENDENCY = {
  CODE: 424,
  MESSAGE: 'The request failed due to failure of a previous request.',
};

export const HTTP_INTERNAL_SERVER_ERROR = {
  CODE: 500,
  MESSAGE: 'Something went wrong',
};
