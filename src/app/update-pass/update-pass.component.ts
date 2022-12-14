import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.css']
})
export class UpdatePassComponent implements OnInit {

  email: string='';
 
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
 
  sendlink(){
    this.auth.changePassword(this.email);
    this.email='';
  }
  }
 
  


