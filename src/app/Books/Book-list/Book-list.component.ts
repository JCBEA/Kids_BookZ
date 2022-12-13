import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import { Database, ref, set, update, remove,query,orderByChild,equalTo} from '@angular/fire/database';
import Swal from 'sweetalert2'
import { CustomProvider } from '@angular/fire/app-check';
import { style } from '@angular/animations';
import { idToken } from '@angular/fire/auth';

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


  
  
  simpleAlert(value:any, title:any,img:any,author:any){
    Swal.fire({
      title: title,
      text: author,
      width: 500,
      padding: '20px',
      imageUrl: img,
      imageWidth: 200,
      imageHeight: 200,
      color: 'black',
      imageAlt: 'Custom image',
      confirmButtonText: 'STORY',
      background:'url("../../../assets/images/BGBGBG.png")' ,
      backdrop: `
      url("../../../assets/images/download.gif")
    `    
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({    
          title: value,
          text: author,
          width: 1200,
          padding: '20px',
          imageUrl: img,
          imageWidth: 200,
          imageHeight: 200,
          color: 'black',
          imageAlt: 'Custom image',
          confirmButtonText: 'Done',
          background:'url("../../../assets/images/BGBGBG.png")' ,
          backdrop: `
          url("../../../assets/images/download.gif")
        `    })
      }
    })
    
  }

  

  
  
}
