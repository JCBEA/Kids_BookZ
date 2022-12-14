import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-web-comments',
  templateUrl: './web-comments.component.html',
  styleUrls: ['./web-comments.component.css']
})
export class WebCommentsComponent implements OnInit {
  imageList: any = [];
  rowIndexArray: any = [];
  comments!: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
  }
  ngOnInit(): void {
    this.db.list('Comments').snapshotChanges().subscribe(
      list => {
      this.imageList = list.map(item => {return item.payload.val();});
      this.rowIndexArray = Array.from(Array(Math.ceil(this.imageList.length/3)).keys());
      this.getbookDetails();  
      }
    );

  }

  getbookDetails() {
    this.comments = this.db.list('Comments')
  }

 

  

}
