import {httpService} from '../services';

const BOOKS_URL = '/books';

export class BookStorage {
  constructor() {
    this._fetchBooksFromServer();
  }
  static fetchBooksFromServer(){
    this._fetchBooksFromServer();
  }
  get books() {
    return this._books;
  }
  set books(books) {
    this._books = books;
  }
  _fetchBooksFromServer = () => {
    if(!this.books) {
      httpService.getUrl(BOOKS_URL)
        .then(({body}) => this._books = body)
        .catch((error) => {
          throw new Error(error);
        });
    }
  }
}