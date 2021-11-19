import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from '../../Customer/customer-list/customer-list.component';
import { CustomerAddComponent } from '../../Customer/customer-add/customer-add.component';
import { CustomerEditComponent } from '../../Customer/customer-edit/customer-edit.component';
import { AuthGuard } from '../shared/Guards/auth.guard';
import { LoginComponent } from '../../login/login.component';
import { CanDeactivateGuard } from '../shared/Guards/can-deactivate.guard';



const routes:Routes =[
{path:"", canActivate:[AuthGuard], component:CustomerListComponent},
{path:"add", canActivate:[AuthGuard],canDeactivate:[CanDeactivateGuard], component:CustomerAddComponent},
{path:"edit", canActivate:[AuthGuard], component:CustomerEditComponent},
{path:"login", component:LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
