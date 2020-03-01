import {
  HTTP_OK,
  HTTP_CREATED,
  HTTP_BAD_REQUEST,
  HTTP_NOT_FOUND,
  HTTP_INTERNAL_SERVER_ERROR,
  HTTP_CONFLICT,
  HTTP_FAILED_DEPENDENCY,
} from './httpResponses';


export interface LambdaResponse {
  statusCode: number;
  body: string;
  [key: string]: unknown;
}

/**
 * @param {object} data optional data object
 * @param {string} message description of what happened during a request
 * @param {number} statusCode of HTTP response
 */
const responseCreator = (data: unknown, message: string, statusCode: number): LambdaResponse => ({
  statusCode,
  body: JSON.stringify({
    message,
    data,
  }),
  headers: {
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
  },
});

export const httpOkResponse = (
  data? : unknown,
): LambdaResponse => responseCreator(data, HTTP_OK.MESSAGE, HTTP_OK.CODE);
export const httpCreatedResponse = (
  data? : unknown,
): LambdaResponse => responseCreator(data, HTTP_CREATED.MESSAGE, HTTP_CREATED.CODE);

export const httpBadRequestResponse = (
  data? : unknown,
): LambdaResponse => responseCreator(data, HTTP_BAD_REQUEST.MESSAGE, HTTP_BAD_REQUEST.CODE);

export const httpNotFoundResponse = (
  data? : unknown,
): LambdaResponse => responseCreator(data, HTTP_NOT_FOUND.MESSAGE, HTTP_NOT_FOUND.CODE);

export const httpConflictResponse = (
  data? : unknown,
): LambdaResponse => responseCreator(data, HTTP_CONFLICT.MESSAGE, HTTP_CONFLICT.CODE);

export const httpFailedDependency = (
  data? : unknown,
): LambdaResponse => responseCreator(data, HTTP_FAILED_DEPENDENCY.MESSAGE, HTTP_FAILED_DEPENDENCY.CODE);

export const httpInternalServerErrorResponse = (
  data? : unknown,
): LambdaResponse => responseCreator(data, HTTP_INTERNAL_SERVER_ERROR.MESSAGE, HTTP_INTERNAL_SERVER_ERROR.CODE);
