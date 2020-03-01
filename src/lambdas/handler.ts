/* eslint-disable @typescript-eslint/camelcase */

'use strict';

import * as AWSLambda from 'aws-lambda';
import { LambdaResponse, httpOkResponse, httpInternalServerErrorResponse } from './utils/responses';


exports.handler = async (event: AWSLambda.APIGatewayEvent): Promise<LambdaResponse> => {
  try {
    return httpOkResponse({
      message: 'OK',
      input: event,
    });
  } catch (error) {
    console.error(error);

    return httpInternalServerErrorResponse(error);
  }
};
