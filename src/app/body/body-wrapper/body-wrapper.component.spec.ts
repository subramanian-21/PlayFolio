import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWrapperComponent } from './body-wrapper.component';

describe('BodyWrapperComponent', () => {
  let component: BodyWrapperComponent;
  let fixture: ComponentFixture<BodyWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyWrapperComponent]
    });
    fixture = TestBed.createComponent(BodyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
