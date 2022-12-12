import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from "@angular/fire/compat/database";
import { Database, ref, set, update, remove, orderByChild, equalTo, get, query,} from '@angular/fire/database';
import Swal from 'sweetalert2'
import { CustomProvider } from '@angular/fire/app-check';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  bookDetails!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase, public database:Database) { }

  getbookDetails() {
    this.bookDetails = this.firebase.list('/bookDetails')
  }

  insertbookDetails(payload:any) {
    
    const dbRef = this.firebase.list('/bookDetails')
    dbRef.push(payload).then(res =>{
      payload.id = res.key
      this.firebase.object('/bookDetails/'+`${payload.id}`).update(payload)
    })
  }
}
