import { HttpResponse } from '../http-response';

/**
 * HTTP response for 200 OK.
 * @param T - Type of the body
 * @template T
 */
export class Ok<T> extends HttpResponse<T> {
  /**
   * This constructor initializes the HTTP status 200 and response body.
   * @param {T} body - The body of the requested resource.
   */
  constructor(body: T) {
    super(200, body);
  }
}
