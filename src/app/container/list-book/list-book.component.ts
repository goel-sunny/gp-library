import { Component, OnInit } from "@angular/core";
import { IBook } from "../../models/ui-models/book.ui.model";
import { BookService } from "../../services/book.service";

@Component({
  selector: "app-list-book",
  templateUrl: "./list-book.component.html",
  styleUrls: ["./list-book.component.css"]
})
export class ListBookComponent implements OnInit {
  public bookList: Array<IBook>;
  private searchBookRef;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.bookList$.subscribe(bookList => {
      this.bookList = bookList;
    });
  }

  searchBook(event) {
    clearInterval(this.searchBookRef);

    this.searchBookRef = setTimeout(() => {
      this.bookList = this.bookList.filter(book => {
        if (book.name.includes(event.target.value)) {
          return true;
        }

        return false;
      });
    }, 500);
  }
}
