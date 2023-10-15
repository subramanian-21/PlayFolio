import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowWrapComponent } from './bow-wrap.component';

describe('BowWrapComponent', () => {
  let component: BowWrapComponent;
  let fixture: ComponentFixture<BowWrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BowWrapComponent]
    });
    fixture = TestBed.createComponent(BowWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
