/**
 * Base class for HTTP responses expressive should handle. Do not use this class directly as it should remain internal.
 * Instead use derived classes such as {@link Ok} or {@link Created}.
 */
export class HttpResponse<T> {
  /**
   * This constructor initializes the response status code and JSON body.
   *
   * @param {number} status - The HTTP status code
   * @param {T} body - The object literal representing the returned body
   * @template T
   */
  constructor(public readonly status: number,
              public readonly body?: T) {
  }
}
