import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /* rcpFlag: boolean = false;
  shpFlag: boolean = false;

  onClickedRcp(flag: boolean){
    this.rcpFlag = flag;
    this.shpFlag = false;
  }

  onClickedShpList(flag: boolean){
    this.shpFlag = flag;
    this.rcpFlag = false;
  } */
  loadedOption: string = 'recipes';

  checkOption(opt: string){
    this.loadedOption = opt;
  }
}
