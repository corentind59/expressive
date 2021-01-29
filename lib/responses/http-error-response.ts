import { HttpResponse } from './http-response';

export type HttpError = {
  code: string;
  message?: string;
}

export class HttpErrorResponse extends HttpResponse<HttpError> {
  constructor(status: number, body: HttpError) {
    super(status, body);
  }
}
