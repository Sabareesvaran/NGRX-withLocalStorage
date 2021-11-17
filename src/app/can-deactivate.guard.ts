import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';


export interface canLeaveComponent{
  canLeave:() =>boolean
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<canLeaveComponent>{


  canDeactivate(component:canLeaveComponent) {
  
      if(component.canLeave){
        return component.canLeave()
      }else{
        return true;
      }
    
    
  }
  
}
