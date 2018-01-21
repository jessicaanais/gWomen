import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinLoginComponent } from './join-login.component';

describe('JoinLoginComponent', () => {
  let component: JoinLoginComponent;
  let fixture: ComponentFixture<JoinLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
