import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { login } from './state/login.actions';
import { isAuthenticated } from './state/login.selector';
import { LoginState } from './state/login.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  isAuthenticated = false;
  userDetails:Subscription
  Email:string
  Password:string
  registerForm: FormGroup;
    submitted = false;

  constructor(
    private store:Store<{User:LoginState}>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.userDetails = this.store.select(isAuthenticated).subscribe(data=>{

      this.isAuthenticated = data;
   })

   this.registerForm = this.formBuilder.group({

    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});

  }

  onLogin(){

    this.Email = this.registerForm.value.email
    this.Password = this.registerForm.value.password

    this.registerForm.reset();
    this.store.dispatch(login({Email:this.Email,Password:this.Password}))

    if(!this.isAuthenticated){
      alert("Username or Password Incorrect")
    }
    else{
            this.router.navigate(['/'],{relativeTo:this.route})
    }
  }

  ngOnDestroy(){
    this.userDetails.unsubscribe()
  }

  get f() { return this.registerForm.controls; }


}
