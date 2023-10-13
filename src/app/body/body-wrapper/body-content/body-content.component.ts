import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css'],
})
export class BodyContentComponent {
  data: any = [];
  getApi(genre: string, page: number) {
    axios
      .get(
        `https://api.rawg.io/api/games?key=faf03104a734484db6f8cdc297d6cb53&genre=${genre}&page=${page}`
      )
      .then((r) => {
        this.data = r.data;
        console.log(this.data);
      });
  }
}
