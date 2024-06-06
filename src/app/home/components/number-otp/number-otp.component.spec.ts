import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOTPComponent } from './number-otp.component';

describe('NumberOTPComponent', () => {
  let component: NumberOTPComponent;
  let fixture: ComponentFixture<NumberOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberOTPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
