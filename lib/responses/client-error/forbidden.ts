import { HttpError, HttpErrorResponse } from '../http-error-response';

const DEFAULT_FORBIDDEN: HttpError = {
  code: 'forbidden',
  message: 'You do not own enough rights to access this resource.'
}

/**
 * HTTP response for 403 Forbidden.
 */
export class Forbidden extends HttpErrorResponse {
  /**
   * This constructor initializes the HTTP status 403 with an error body.
   * @param {HttpError} error - (optional) an error body override.
   */
  constructor(error: HttpError = DEFAULT_FORBIDDEN) {
    super(403, error);
  }
}
