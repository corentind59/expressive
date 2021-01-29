import { HttpError, HttpErrorResponse } from '../http-error-response';

const DEFAULT_NOT_FOUND: HttpError = {
  code: 'not-found',
  message: 'This is resource could not be found.'
}

export class NotFound extends HttpErrorResponse {
  constructor(error: HttpError = DEFAULT_NOT_FOUND) {
    super(404, error);
  }
}
