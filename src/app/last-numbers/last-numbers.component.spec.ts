import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNumbersComponent } from './last-numbers.component';

describe('LastNumbersComponent', () => {
  let component: LastNumbersComponent;
  let fixture: ComponentFixture<LastNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
