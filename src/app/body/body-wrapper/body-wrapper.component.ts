import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-wrapper',
  templateUrl: './body-wrapper.component.html',
  styleUrls: ['./body-wrapper.component.css']
})
export class BodyWrapperComponent {
  @Input() heading = ''
}
