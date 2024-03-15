import { Injectable } from "@angular/core";

@Injectable()

export class CounterService{
    toActive: number = 0;
    toInactive: number = 0;

    inactiveToActive(){
        this.toActive++;
    }
    activeToInactive(){
        this.toInactive++;
    }
}