import { HttpResponse } from '../http-response';

/**
 * HTTP response for 204 No content.
 */
export class NoContent extends HttpResponse<unknown> {
  /**
   * This constructor initializes the HTTP status 204.
   */
  constructor() {
    super(204);
  }
}
