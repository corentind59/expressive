import { Request, RequestHandler } from 'express';

/**
 * A mapping function between the express {@link Request} object and an optionally promisified {@link HttpResponse}.
 */
export type ControllerFunction<R> = (res: Request) => R | Promise<R>;

/**
 * This function must wrap your {@link RequestHandler} in order for expressive to properly manage asynchronous code
 * and returned {@link HttpResponse}.
 * @param {ControllerFunction} controllerFunction - The handler for the router endpoint.
 */
export function handle<R>(controllerFunction: ControllerFunction<R>): RequestHandler {
  return (req, _, next) => {
    const result = controllerFunction(req);
    if (result instanceof Promise) {
      return result
        .then(data => next(data))
        .catch(data => next(data));
    } else {
      return next(result);
    }
  };
}
