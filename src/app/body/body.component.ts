import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
    categoies:Array<string> = ['action','arcade',"indie","puzzle",'strategy']
    clickedGame:any
    gameClick(game:any){
     this.clickedGame = game
     console.log(game)
    }
}
