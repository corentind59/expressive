import { HttpError, HttpErrorResponse } from '../http-error-response';

const DEFAULT_UNAUTHORIZED: HttpError = {
  code: 'unauthorized',
  message: 'You are not authorized to access this resource.'
}

/**
 * HTTP response for 401 Unauthorized.
 */
export class Unauthorized extends HttpErrorResponse {
  /**
   * This constructor initializes the HTTP status 401 with an error body.
   * @param {HttpError} error - (optional) an error body override.
   */
  constructor(error: HttpError = DEFAULT_UNAUTHORIZED) {
    super(401, error);
  }
}
