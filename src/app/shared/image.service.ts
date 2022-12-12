import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  bookDetails!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getbookDetails() {
    this.bookDetails = this.firebase.list('/bookDetails');
  }

  insertbookDetails(payload:any) {
    const dbRef = this.firebase.list('/bookDetails')
    dbRef.push(payload).then(res =>{
      payload.id = res.key
      this.firebase.object('/bookDetails/'+`${payload.id}`).update(payload)
    })
  }
}