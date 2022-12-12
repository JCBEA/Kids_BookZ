import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import { Database, ref, set, update, remove} from '@angular/fire/database';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-image-list',
  templateUrl: './Book-list.component.html',
  styleUrls: ['./Book-list.component.css']
})
export class BookListComponent implements OnInit {
  imageList: any = [];
  rowIndexArray: any = [];

  constructor(private service: ImageService,public database: Database) { }
  

  ngOnInit(){
    this.service.bookDetails.snapshotChanges().subscribe(
      list => {
      this.imageList = list.map(item => {return item.payload.val();});
      this.rowIndexArray = Array.from(Array(Math.ceil(this.imageList.length/3)).keys());

      this.service.getbookDetails();  
      }
    );
  }
  
  simpleAlert(value:any, id:any){
    Swal.fire(id,value)

    
  }
  
}
