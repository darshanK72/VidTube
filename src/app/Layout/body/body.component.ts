import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() sideNavStatus:boolean = false;

  numlist:string[]=["1","2","3","4","5","6","7","8"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
