import { HttpError, HttpErrorResponse } from '../http-error-response';

const DEFAULT_FORBIDDEN: HttpError = {
  code: 'forbidden',
  message: 'You do not own enough rights to access this resource.'
}

export class Forbidden extends HttpErrorResponse {
  constructor(error: HttpError = DEFAULT_FORBIDDEN) {
    super(403, error);
  }
}
