import { Component, OnInit } from '@angular/core';
import { Database, ref, set, update, remove} from '@angular/fire/database';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { ImageService } from 'src/app/shared/image.service';
import { NgConfirmService } from 'ng-confirm-box';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-web-comments',
  templateUrl: './web-comments.component.html',
  styleUrls: ['./web-comments.component.css']
})
export class WebCommentsComponent implements OnInit {
  imageList: any = [];
  rowIndexArray: any = [];
  comments!: AngularFireList<any>;
  constructor(private db: AngularFireDatabase, private service: ImageService, private confirmService: NgConfirmService, public database: Database) {
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

  registerUser(value: any){
    this.confirmService.showConfirm("WANT TO DELETE?????????????",
     () => {
      remove(ref(this.database, 'Comments/' + value));
      Swal.fire({    
        title: 'Comment Successfuly Deleted',
        icon:'success',
        color: 'black',
        confirmButtonText: 'Done',
        position: 'top-right'
    })
    }, 

    () => {
      //cancel
    })
  }

  
 

  

}
