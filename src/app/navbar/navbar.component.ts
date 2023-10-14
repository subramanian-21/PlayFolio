import { Component, Input, Output } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
search:string = ''
load(e:any){
  this.search = e.target.value
  this.onSearchInput(this.search)
}
result:any[] = []
loading:boolean = true

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
