import { Component, OnInit } from '@angular/core';
import { Database, ref, set, update} from '@angular/fire/database';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(public database: Database) { }

  ngOnInit(): void {
  }
registerUser(value: any){
  
  update(ref(this.database,'bookDetails/' + value.Title), {
    Story: value.Story,
    author: value.author
  });
  alert('Update Successfuly');

}
}
