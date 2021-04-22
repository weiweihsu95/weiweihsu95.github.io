import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

  get score() {
    let message: string = 'Hello World';
    console.log(message);
    return console.log(message);

  }

}
