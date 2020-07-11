import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding1PropertyComponent } from './binding1-property.component';

describe('Binding1PropertyComponent', () => {
  let component: Binding1PropertyComponent;
  let fixture: ComponentFixture<Binding1PropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Binding1PropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Binding1PropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
