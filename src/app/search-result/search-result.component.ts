import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  loading:boolean = true
@Input() searchInput:string = ""

@Input() result:any[] =[]
}
