import { HttpError, HttpErrorResponse } from '../http-error-response';

const DEFAULT_INTERNAL_SERVER_ERROR: HttpError = {
  code: 'internal-server-error',
  message: 'An unexpected error occurred. Please try again later. If the error persists, please contact an administrator.'
};

/**
 * HTTP response for 500 Internal Server Error.
 */
export class InternalServerError extends HttpErrorResponse {
  /**
   * This constructor initializes the HTTP status 500 with an error body.
   * @param {HttpError} error - (optional) an error body override.
   */
  constructor(error: HttpError = DEFAULT_INTERNAL_SERVER_ERROR) {
    super(500, error)
  }
}
