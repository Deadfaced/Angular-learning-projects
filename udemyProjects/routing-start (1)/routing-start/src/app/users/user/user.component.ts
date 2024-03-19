import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  routeId: number;
  
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.routeId = params['id'];
          this.user = this.usersService.getUser(+this.routeId);
        }
    )
  }

}
