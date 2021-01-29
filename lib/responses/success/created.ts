import { HttpResponse } from '../http-response';

export class Created<T> extends HttpResponse<T> {
  constructor(body: T) {
    super(201, body);
  }
}
