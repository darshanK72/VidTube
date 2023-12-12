import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {

  numlist:string[]=["1","2","3","4","5","6","7","8"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
