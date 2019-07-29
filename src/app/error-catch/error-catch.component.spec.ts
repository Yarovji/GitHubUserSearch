import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCatchComponent } from './error-catch.component';

describe('ErrorCatchComponent', () => {
  let component: ErrorCatchComponent;
  let fixture: ComponentFixture<ErrorCatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorCatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
