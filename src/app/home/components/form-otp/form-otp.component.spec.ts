import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOTPComponent } from './form-otp.component';

describe('FormOTPComponent', () => {
  let component: FormOTPComponent;
  let fixture: ComponentFixture<FormOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormOTPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
