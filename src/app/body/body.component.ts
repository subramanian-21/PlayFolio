import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
    categoies:Array<string> = ['action','arcade',"indie","puzzle",'strategy']
    @Input() clickedGame:any
    backBtn(){
      this.clickedGame = null
    }
    gameClick(game:any){
     this.clickedGame = game
    }
}
