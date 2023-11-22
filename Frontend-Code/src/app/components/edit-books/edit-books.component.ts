import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookstoreServiceService } from 'src/app/services/bookstore-service.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css'],
})
export class EditBooksComponent implements OnInit {
  @Input() selectedBook: any; // Input property to receive selected book for update

  bookForm: FormGroup;
  route?: ActivatedRoute;  // Make ActivatedRoute public
  constructor(
    private fb: FormBuilder,
    private bookservice: BookstoreServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.bookForm = this.fb.group({
      id:[''],
      title: ['', Validators.required],
      author: ['', Validators.required],
    });
    this.route = activatedRoute;  // Initialize the property in the constructor
  }
  ngOnInit() {
    this.route?.params.subscribe((params) => {
      const id = params['id'];

      if (id) {
        // If an id parameter is present, fetch the book details for update
        this.bookservice.getBook(id).subscribe((book) => {
          this.bookForm.patchValue(book);
        });
      }
    });
  }
  onSubmit() {
    if (this.bookForm.valid) {
      const id = this.route?.snapshot.params['id'];

      if (id) {
        // If an id parameter is present, update the book
        this.bookservice.updateBook(id, this.bookForm.value).subscribe(() => {
          this.router.navigate(['/home']);
        });
      } else {
        // If no id parameter is present, add a new book
        // Exclude 'id' property from the book object
      const { id, ...newBook } = this.bookForm.value;
        this.bookservice.addBook(newBook).subscribe(() => {
          this.router.navigate(['/home']);
        });
      }
    }
  }
}
