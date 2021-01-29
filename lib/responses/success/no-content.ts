import { HttpResponse } from '../http-response';

export class NoContent extends HttpResponse<unknown> {
  constructor() {
    super(204);
  }
}
