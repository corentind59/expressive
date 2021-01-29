import { Request, RequestHandler } from 'express';

export type ControllerFunction<R> = (res: Request) => R | Promise<R>;

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
