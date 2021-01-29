import { HttpResponse } from './http-response';

/**
 * Standard error body type definition.
 */
export type HttpError = {
  /**
   * A string code summarizing the error ina short form. This allows API consumers to better handle things like i18n.
   */
  code: string;

  /**
   * A message describing the error in a detailed way.
   */
  message?: string;
}

/**
 * Base class for HTTP error responses expressive should handle. Do not use this class directly as it should remain internal.
 * Instead use derived classes such as {@link NotFound} or {@link BadRequest}.
 */
export class HttpErrorResponse extends HttpResponse<HttpError> {

  /**
   * This constructor initializes the error status and body.
   * @param {number} status - The HTTP status code
   * @param {HttpError} body - The error body containing code and (optionally) message
   */
  constructor(status: number, body: HttpError) {
    super(status, body);
  }
}
