import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('searchInput') searchInput:ElementRef
  
  focusInput(){
    this.searchInput.nativeElement.focus()
  }
@Input() search:string = ''
load(e:any){
  this.search = e.target.value
  this.onSearchInput(this.search)
}
result:any[] = []
loading:boolean = false
@Input() clickedGame:any
onSearchInput(searchInput:string){
  this.loading = true
  axios
  .get(
    `https://api.rawg.io/api/games?key=faf03104a734484db6f8cdc297d6cb53&search=${searchInput}`
  )
  .then((r) => {
   
    this.result = r.data.results;
    setTimeout(() => {
      this.loading = false
    }, 3000);
  });
}
}
