import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SideNavComponent } from "./container/side-nav/side-nav.component";
import { AddBookComponent } from "./container/add-book/add-book.component";
import { HttpClientModule } from "@angular/common/http";
import { BookService } from "./services/book.service";
import { ListBookComponent } from "./container/list-book/list-book.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    SideNavComponent,
    AddBookComponent,
    ListBookComponent
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
