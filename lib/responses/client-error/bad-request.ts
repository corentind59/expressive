import { HttpError, HttpErrorResponse } from '../http-error-response';

export class BadRequest extends HttpErrorResponse {
  constructor(error: HttpError) {
    super(400, error);
  }
}
