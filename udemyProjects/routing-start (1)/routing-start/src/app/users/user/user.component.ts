import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = {};
  
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          if(params['id']){
            this.user.id = this.usersService.getUser(Number(params['id'])).id;
            this.user.name = this.usersService.getUser(Number(params['id'])).name;
          }else{
            this.user.id = this.usersService.getUser(1).id;
            this.user.name = this.usersService.getUser(1).name;
          }
        }
    )
  }

}
