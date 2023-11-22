import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookstoreServiceService } from 'src/app/services/bookstore-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: any[] = [];

  constructor(private bookService: BookstoreServiceService ,private router:Router){
  
    this.fetchBooks();
  }


  fetchBooks(){
    this.bookService.getBooks().subscribe((data) =>{

      this.books = data;
      console.log("Books data",data);
     });
  }
  updateBook(book: any) {
    this.router.navigate(['/edit', book.id]);
  }
  deleteBook(id: number) {
    const confirmDelete = window.confirm('Are you sure you want to delete this book?');

    if (confirmDelete) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.fetchBooks();
      });
    }
  }
  addNewBook() {
    this.router.navigate(['/edit']);
  }
}
