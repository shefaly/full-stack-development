import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsspropertyComponent } from './cssproperty.component';

describe('CsspropertyComponent', () => {
  let component: CsspropertyComponent;
  let fixture: ComponentFixture<CsspropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsspropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsspropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
