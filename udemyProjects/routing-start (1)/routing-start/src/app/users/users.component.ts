import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users = [];
  userId: string;

  constructor(private usersService: UsersService, private route: ActivatedRoute){}

  ngOnInit(){
    this.users = this.usersService.getUsers().slice();
  }
}
