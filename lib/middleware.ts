import { ErrorRequestHandler } from 'express';
import { HttpResponse, InternalServerError } from './responses';

export function responseMiddleware(): ErrorRequestHandler {
  return ((err, req, res, next) => {
    if (err instanceof HttpResponse) {
      res.status(err.status);

      res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.header('Pragma', 'no-cache');
      res.header('Expires', '0');

      if (err.status === 204) {
        return res.end();
      } else {
        return res.json(err.body);
      }
    } else {
      console.error(err);
      return responseMiddleware()(new InternalServerError(), req, res, next);
    }
  });
}
