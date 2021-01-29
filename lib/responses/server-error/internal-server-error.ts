import { HttpError, HttpErrorResponse } from '../http-error-response';

export const DEFAULT_INTERNAL_SERVER_ERROR: HttpError = {
  code: 'internal-server-error',
  message: 'An unexpected error occurred. Please try again later. If the error persists, please contact an administrator.'
};

export class InternalServerError extends HttpErrorResponse {
  constructor(error: HttpError = DEFAULT_INTERNAL_SERVER_ERROR) {
    super(500, error)
  }
}
