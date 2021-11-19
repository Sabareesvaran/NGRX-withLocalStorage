import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../../Customer/state/customer.state';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  customer:Customer
  authToken:boolean = false;
  userDetails:Subscription
  navtag = false;
  constructor() { }

  setCustomer(data:Customer){
    this.customer = data
  }
  getCustomer(){
    return this.customer
  }
  getToken(){
    let token = {customers:[],login:{Email:"",Password:"",isAuthenticated:false}}
    token = JSON.parse(localStorage.getItem("customer") || '{}') 
    

    try{
      console.log(token.login.isAuthenticated)
      this.authToken = token.login.isAuthenticated

    }catch(e){
      this.authToken = false
    }
    return this.authToken
  }
  
 
}
