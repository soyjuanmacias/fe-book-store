import request from 'superagent/superagent';

class HttpService {
  constructor() {
    this._serverUrl = 'http://localhost:3000';
  }
  get serverUrl() {
    return this._serverUrl;
  }
  _getFullPath(path) {
    return (`${this._serverUrl}${path}`);
  }
  getUrl(path) {
    return request
      .get(this._getFullPath(path));
  }
}
export const httpService = new HttpService();