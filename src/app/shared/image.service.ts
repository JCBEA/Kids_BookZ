import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  bookDetails!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getbookDetails() {
    this.bookDetails = this.firebase.list('bookDetails');
  }

  insertbookDetails(bookDetails:any) {
    this.bookDetails.push(bookDetails);
  }
}