import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {
  serverName = "directive server";
  serverCreated = false;
  serverCreationStatus = 'No server was created for directive';
  // addClick: boolean = true;
  constructor() {}

  ngOnInit(): void {
  }

  onCreateServerforDirective(){
    this.serverCreated = true;
    // this.serverCreationStatus = 'Server was created and the name is:'+ this.serverName;
    // if(this.serverName !==''){
    //   this.serverCreated = true;
    // }
  }
   

}
