import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'], 
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usrs: UsersService) {}

  ngOnInit(){
    this.users = this.usrs.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usrs.onSetToInactive(id);
    this.users = this.usrs.activeUsers;
  }
}
