import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './Book-list.component.html',
  styles:[]
})
export class BookListComponent implements OnInit {
  imageList: any = [];
  rowIndexArray: any = [];

  constructor(private service: ImageService, ) { }

  ngOnInit(){
    this.service.bookDetails.snapshotChanges().subscribe(
      list => {
      this.imageList = list.map(item => {return item.payload.val();});
      this.rowIndexArray = Array.from(Array(Math.ceil(this.imageList.length / 3)).keys());
      }
    );
  }

}