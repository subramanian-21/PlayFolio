import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  result:any[] = []
  loading:boolean = true
@Input() searchInput:string = ""

ngDoCheck(){
  this.onSearchInput(this.searchInput)
}
onSearchInput(searchInput:string){
  axios
  .get(
    `https://api.rawg.io/api/games?key=faf03104a734484db6f8cdc297d6cb53&search=${searchInput}`
  )
  .then((r) => {
   
    this.result = r.data.results;
    setTimeout(() => {
      this.loading = false
    }, 3000);
 
  console.log(r.data)
  });
}
}
