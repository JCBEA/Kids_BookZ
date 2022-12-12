import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './Books.component.html',
  styles: []
})
export class BooksComponent implements OnInit {

  constructor(private service:ImageService) { }

  ngOnInit() {
    this.service.getbookDetails();
  }

}