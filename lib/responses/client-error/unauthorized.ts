import { HttpError, HttpErrorResponse } from '../http-error-response';

const DEFAULT_UNAUTHORIZED: HttpError = {
  code: 'unauthorized',
  message: 'You are not authorized to access this endpoint.'
}

export class Unauthorized extends HttpErrorResponse {
  constructor(error: HttpError = DEFAULT_UNAUTHORIZED) {
    super(401, error);
  }
}
