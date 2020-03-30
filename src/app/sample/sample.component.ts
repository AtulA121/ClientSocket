import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { HttpServiceService } from '../http-service.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  url: any="http://localhost:3000/getToken";

  constructor(private _socket : WebsocketService,private _httpService : HttpServiceService){
    
  }

  async ngOnInit() {
    this._httpService.getData(this.url).subscribe(async(res : any)=>{
      await this.initSocket(res.token);
      console.log(res);
      this._socket.sendMessage(res.token,{type : 1});
    });
  }

  async initSocket(token){
    await this._socket.getInstance(token);
  }

}
