// event bindings example

import { LoginComponent } from "./login.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitEl

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement
    fixture.detectChanges();
  });

  it("should call sigin button", () => {
    component.loginForm.patchValue({
      email:'user1@gmail.com',
      password:'****'
    });
    fixture.detectChanges();

    let subscribeButton = fixture.debugElement.query(By.css("button"));
    subscribeButton.triggerEventHandler("click", null);

    expect(component.loginForm.valid).toBe(true);
  });

  it('should submit button disable for null values', () => {
    expect(submitEl.nativeElement.querySelectors('button')[0].disabled).toBeTruthy();
   });

   it('should submit button enable for not null values', () => {
    component.loginForm.patchValue({
      email:'user1@gmail.com',
      password:'****'
    });
    expect(submitEl.nativeElement.querySelectors('button')[0].disabled).toBeFalsy();
   });
});
