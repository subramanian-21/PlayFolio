import { Component } from '@angular/core';
import { ServiceComponent } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game:any
  clickingGame:any
  getClickedGame(val:any){
    this.clickingGame = val
    console.log(val)
  }
}