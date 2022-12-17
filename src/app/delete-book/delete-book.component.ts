import { Component, OnInit } from '@angular/core';
import { Database, ref, set, update, remove} from '@angular/fire/database';
import { ImageService } from 'src/app/shared/image.service';
import { NgConfirmService } from 'ng-confirm-box';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})


export class DeleteBookComponent implements OnInit {
  imageList: any = [];
  rowIndexArray: any = [];
  constructor(public database: Database,private service: ImageService, private confirmService: NgConfirmService) { }

  ngOnInit(){
    this.service.bookDetails.snapshotChanges().subscribe(
      list => {
      this.imageList = list.map(item => {return item.payload.val();});
      this.rowIndexArray = Array.from(Array(Math.ceil(this.imageList.length / 3)).keys());
      this.service.getbookDetails();  
      }
    );
  }

  registerUser(value: any){

    this.confirmService.showConfirm("WANT TO DELETE???????????????",
     () => {
      remove(ref(this.database, 'bookDetails/' + value));
      Swal.fire({    
        title: 'Book Successfuly Deleted',
        icon:'success',
        color: 'black',
        confirmButtonText: 'Done',
        position: 'top-right'
    })
    },

    () => {
      //cancel
    }
    )
  }
    
  
  }

  


