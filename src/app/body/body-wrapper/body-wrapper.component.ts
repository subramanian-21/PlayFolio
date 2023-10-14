import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-body-wrapper',
  templateUrl: './body-wrapper.component.html',
  styleUrls: ['./body-wrapper.component.css']
})
export class BodyWrapperComponent {
  @Input() heading = ''
  game:any
  result:any= []
  loading:boolean = true
  openGame(val:any){
    this.game =val

  }
ngOnInit(){
  this.getApi(this.heading,1)
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
     
      
      });
  }
}
