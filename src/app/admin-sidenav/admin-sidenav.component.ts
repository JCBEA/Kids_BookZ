import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import { Database, ref, set} from '@angular/fire/database';
import { Auth, createUserWithEmailAndPassword, linkWithRedirect, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  constructor(public auth: Auth, public database: Database,
    private route: Router, private service: ImageService, private confirmService: NgConfirmService, public afAuth: AngularFireAuth) { }
  ngOnInit(): void {
  }



  signOut(){
    this.confirmService.showConfirm("WANT TO LOGOUT??     --------------------",
     () => {
      return this.auth.signOut().then(() => {
        this.route.navigate(['/admin-login'])
      });

    }, 

    () => {
      //cancel
    })
  }


}
