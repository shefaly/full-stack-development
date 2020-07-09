import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShefalyGitamComponent } from './shefaly-gitam.component';

describe('ShefalyGitamComponent', () => {
  let component: ShefalyGitamComponent;
  let fixture: ComponentFixture<ShefalyGitamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShefalyGitamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShefalyGitamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
