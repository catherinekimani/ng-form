import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  submit(myform: any) {
    console.log("Form submitted",myform);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
