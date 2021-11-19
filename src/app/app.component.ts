import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthenticated } from './login/state/login.selector';
import { LoginState } from './login/state/login.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrxTask';

   navTag : Observable<any>
    constructor( private store:Store<{User:LoginState}> ){}

          ngOnInit(){
            this.navTag = this.store.select(isAuthenticated)
          }
}
