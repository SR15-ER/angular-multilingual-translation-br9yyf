import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service'
import { AuthService } from './../../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators['required'],Validators['email']]),
    password: new FormControl('',Validators['required']),
  });

  constructor(private router: Router, private userService:UserService,private authService:AuthService) {}

  ngOnInit() {}
  
  onSubmit() {
    this.authService.setLoginUser(this.loginForm.value);
    let isAdmin=this.userService.isAdmin(this.loginForm.value);
    if(!isAdmin)this.router.navigate(['list']);
    else this.router.navigate(['user-list']);
    
  }
  
}
