import { Component, EventEmitter, Input, Output } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

@Input() load:boolean = true

@Input() searchInput:string = ""

@Input() result:any[] =[]

@Output() clickGame = new EventEmitter()


clickToView(val:any){
this.clickGame.emit(val)
}
}
