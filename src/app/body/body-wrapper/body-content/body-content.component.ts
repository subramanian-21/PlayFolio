import { Component, EventEmitter, Input, Output } from '@angular/core';
import axios from 'axios';
import { ServiceComponent } from 'src/app/services/app.service';
@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css'],
})
export class BodyContentComponent {

  @Input() genre:string = ""
  result:any= []
  loading:boolean = true
  game:any

  openGame(val:any){
    this.game =val
    const service =  new ServiceComponent()

    service.game = val
  }
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
     
      
      });
  }
}
