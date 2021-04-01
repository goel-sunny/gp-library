import { IBook } from "../../models/book.ui.model";
import { IBookDomain } from "../../models/domain-models/book.domain.model";

export function mapBookUIToBookDomain(bookDetails: IBook): IBookDomain {
  return {
    bookName: bookDetails.name,
    bookId: bookDetails.id;
    booksDescription: bookDetails.description,
    bookCount: bookDetails.count,
    bookAuthor: bookDetails.count
  };
}
