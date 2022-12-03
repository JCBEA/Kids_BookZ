import { Component, OnInit } from '@angular/core';
import { Database, ref, set, update, remove} from '@angular/fire/database';
@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})

export class DeleteBookComponent implements OnInit {

  constructor(public database: Database) { }

  ngOnInit(): void {
  }

  registerUser(value: any){
  
   remove(ref(this.database, 'bookDetails/' + value.id));
    alert('Update Successfuly');
  
  }

  

}
