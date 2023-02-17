import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call singup button', () => {
    component.signupForm.setValue({
      firstName: 'test',
      surName: 'test',
      email: 'test',
      role: 'test',
      password: 'test',
    });
    let subscribeButton = fixture.debugElement.query(By.css('button'));
    subscribeButton.triggerEventHandler('click', null);
    expect(component.signupForm.valid).toBe(true);
  });
});
