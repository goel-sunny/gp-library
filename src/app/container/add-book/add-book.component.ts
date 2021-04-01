import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { IBook } from "../../models/ui-models/book.ui.model";
import { FormGroup, FormControl } from "@angular/forms";
import { BookService } from "../../services/book.service";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  public bookDetailForm;

  constructor(private addBookService: BookService) {
    this.initialiseBookDetailForm();
  }

  ngOnInit() {}

  addBook(event) {
    this.addBookService.addBook(this.bookDetailForm.value);
  }

  clearForm(event) {}

  private initialiseBookDetailForm() {
    this.bookDetailForm = new FormGroup({
      bookName: new FormControl(""),
      bookCount: new FormControl(0),
      bookAuthor: new FormControl("0"),
      bookDescription: new FormControl("")
    });
  }
}
