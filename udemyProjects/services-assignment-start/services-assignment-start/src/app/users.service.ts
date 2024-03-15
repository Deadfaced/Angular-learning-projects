import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()

export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private count: CounterService){}

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.count.activeToInactive();
        console.log('Active to Inactive: ' + this.count.toInactive);
      }
    
      onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.count.inactiveToActive();
        console.log('Inactive to Active: ' + this.count.toActive);
      };
}