import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usrs: UsersService){}

  ngOnInit(){
    this.users = this.usrs.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usrs.onSetToActive(id);
    this.users = this.usrs.inactiveUsers;
  }
}
