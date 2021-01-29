import { HttpError, HttpErrorResponse } from '../http-error-response';

/**
 * HTTP response for 400 Bad Request.
 */
export class BadRequest extends HttpErrorResponse {

  /**
   * This constructor initializes the HTTP status 400 with an error body.
   * @param {HttpError} error - The error body
   */
  constructor(error: HttpError) {
    super(400, error);
  }
}
