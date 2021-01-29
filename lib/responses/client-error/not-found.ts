import { HttpError, HttpErrorResponse } from '../http-error-response';

const DEFAULT_NOT_FOUND: HttpError = {
  code: 'not-found',
  message: 'Requested resource could not been found.'
}

/**
 * HTTP response for 404 Not found.
 */
export class NotFound extends HttpErrorResponse {
  /**
   * This constructor initializes the HTTP status 404 with an error body.
   * @param {HttpError} error - (optional) an error body override.
   */
  constructor(error: HttpError = DEFAULT_NOT_FOUND) {
    super(404, error);
  }
}
