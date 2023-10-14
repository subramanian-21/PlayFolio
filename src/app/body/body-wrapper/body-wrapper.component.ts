import { Component, EventEmitter, Input, Output } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-body-wrapper',
  templateUrl: './body-wrapper.component.html',
  styleUrls: ['./body-wrapper.component.css']
})
export class BodyWrapperComponent {
  @Input() heading = ''
  @Output() gameClicked = new EventEmitter()
  result:any= []
  loading:boolean = true


  openGame(val:any){
    this.gameClicked.emit(val)

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
