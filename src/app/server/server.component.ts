import { Component,OnInit} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  //string interpolation
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }

    allowNewServer: boolean = false;
    allowUserClick:boolean = false;
    serverCreationStatus = 'No server was created';
    serverName = 'Test Server 2way data binding';
    userName = 'Anoj_Behera';
    constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      },2000);
      // this.allowUserClick = true;
    }

    ngOnInit(){}
    onCreateServer (){
      this.serverCreationStatus = 'Server was created and the name is:'+ this.serverName;
    }
    onUpdateServerName(event:Event){
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
      // sconsole.log(this.serverName);
    }

    addUserName(){
      if(this.userName !== ''){
        // this.allowUserClick = true;
        this.userName = "";
      }
     
    }

}
