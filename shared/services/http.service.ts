export class HttpService {

  async sendGET<T>(path: string): Promise<T> {
    return fetch(path).then(r => r.json());
  }
}
