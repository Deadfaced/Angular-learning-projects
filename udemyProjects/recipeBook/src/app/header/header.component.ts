import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    //my solution
    /* @Output() recipes = new EventEmitter<boolean>();
    @Output() shoppingList = new EventEmitter<boolean>();
    flag: boolean = false; */

    /* onRcpClick(){
        this.flag = true;
        this.recipes.emit(this.flag);
    }

    onShpListClick(){
        this.flag = true;
        this.shoppingList.emit(this.flag);
    } */


    //"correct" solution
    @Output() option = new EventEmitter<string>();


    onSelect(selectedOption: string){
        this.option.emit(selectedOption);
    }
}