import { HttpResponse } from '../http-response';

/**
 * HTTP response for 201 Created.
 * @param T - Type of the body
 * @template T
 */
export class Created<T> extends HttpResponse<T> {

  /**
   * This constructor initializes the HTTP status 201 and response body.
   * @param {T} body - The body of the created resource.
   */
  constructor(body: T) {
    super(201, body);
  }
}
