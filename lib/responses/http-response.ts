export class HttpResponse<T> {
  constructor(public readonly status: number,
              public readonly body?: T) {
  }
}
