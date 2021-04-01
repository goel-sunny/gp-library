import { BehaviorSubject, Subject } from "rxjs";
import { IBook } from "../models/ui-models/book.ui.model";

export class BookService {
  public bookList$ = new BehaviorSubject<Array<IBook>>([]);
  private bookList: Array<IBook>;

  constructor() {
    this.bookList$.subscribe(bookList => {
      this.bookList = bookList;
      console.log(bookList);
    });
  }

  addBook(bookDetail: IBook) {
    this.bookList$.next([...this.bookList, bookDetail]);
  }

  updateBook(bookDetail) {
    this.bookList = this.bookList.map(book => {
      if (book.id === bookDetail.id) {
        return bookDetail;
      }
      return book;
    });

    this.bookList$.next(this.bookList);
  }
}
