import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { DxButtonModule }  from 'devextreme-angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  deleteButtonOptions: any;

  constructor(public messageService: MessageService) { 
    this.deleteButtonOptions = {
      text: "Clear",
      type: "danger",
      onClick: function (e) {
          messageService.clear();
      }
  };
  }

  ngOnInit() {
  }

}
