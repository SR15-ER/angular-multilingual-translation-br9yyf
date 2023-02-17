import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service'
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','./../login/login.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup

  constructor(private fb:FormBuilder,private router:Router,private userService:UserService,private authService:AuthService) { }
  
  ngOnInit() {
    this.signupForm=this.fb.group({
      firstName :['',Validators.required],
      surName :['',Validators.required],
      email :['',[Validators.required,Validators.email]],
      role :['',Validators.required],
      password :['',Validators.required]
    })
  }
  registerUser(){
    this.userService.addUser(this.signupForm.value);
    this.authService.setLoginUser(this.signupForm.value);
    if(this.signupForm.value.role==='user')this.router.navigate(['list']);
    else this.router.navigate(['user-list']);  }
}