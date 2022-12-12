import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import { Database, ref, set, update, remove, orderByChild, equalTo, get, query} from '@angular/fire/database';
import Swal from 'sweetalert2'
import { CustomProvider } from '@angular/fire/app-check';
@Component({
  selector: 'app-category-fable',
  templateUrl: './category-fable.component.html',
  styleUrls: ['./category-fable.component.css'],
 
})
export class CategoryFableComponent implements OnInit {

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
  
  
  simpleAlert(value:any, id:any,img:any){
    Swal.fire({
      title: value,
      width: 1200,
      padding: '20px',
      imageUrl: img,
      imageWidth: 200,
      imageHeight: 200,
      iconHtml: id,
      icon: 'question',
      color: 'black',
      imageAlt: 'Custom image',
      confirmButtonText: 'Done',
      background: 'url("../../../assets/images/newgif.gif")'
    })
    

    

  }
}
  
