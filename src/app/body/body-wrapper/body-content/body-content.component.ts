import { Component, Input } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css'],
})
export class BodyContentComponent {

  @Input() genre:string = ""
  result:any= []
  loading:boolean = true
ngOnInit(){
  this.getApi(this.genre,1)
}
  getApi(genre: string, page: number) {

    axios
      .get(
        `https://api.rawg.io/api/games?key=faf03104a734484db6f8cdc297d6cb53&genres=${genre}&page=${page}`
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
