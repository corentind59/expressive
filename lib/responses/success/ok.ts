import { HttpResponse } from '../http-response';

export class Ok<T> extends HttpResponse<T> {
  constructor(body: T) {
    super(200, body);
  }
}
