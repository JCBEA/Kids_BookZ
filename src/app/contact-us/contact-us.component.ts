import { Component, OnInit } from '@angular/core';
import { Database, set, ref } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  isSubmitted: boolean | undefined;

  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  })
  constructor(public database: Database) { }

  ngOnInit() {
    this.resetForm();
    
  }
  
  registerUser(value:any){
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
    set(ref(this.database,'Comments/' + value.name),{
      name: value.name,
      Email: value.email,
      comment: value.comment,
      month: new Date().getMonth() + 1,
      Year: new Date().getFullYear(),
      day: new Date().getDate(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes()
    });
    Swal.fire({    
      title: 'Thank you for your feedback',
      icon:'success',
      color: 'black',
      confirmButtonText: 'okay',
      position: 'top-right'
  })
    this.resetForm();
    }}
    get formControls() {
      return this.formTemplate['controls'];
    }
    resetForm() {
      this.formTemplate.reset();
      this.formTemplate.setValue({
        name: '',
        email: '',
        comment: '',
      });
      this.isSubmitted = false;
    }
}