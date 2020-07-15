import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForArrayComponent } from './ng-for-array.component';

describe('NgForArrayComponent', () => {
  let component: NgForArrayComponent;
  let fixture: ComponentFixture<NgForArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
