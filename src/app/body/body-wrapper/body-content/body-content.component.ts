import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Api } from 'src/app/services/api.service';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})
export class BodyContentComponent {
  getData(){
    let data = new Api()
    console.log(data.getApi('action',1))
    return data.getApi('action',1)
  }
}
