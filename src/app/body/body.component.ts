import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
    categoies:Array<string> = ['Action','Arcade','AAA Titles','Puzzles','All']
}
