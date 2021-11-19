import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './Customer/customer-list/customer-list.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app-functions/appState/app.state';
import { CustomerAddComponent } from './Customer/customer-add/customer-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-functions/app-routing/app-routing.module';
import { NavbarComponent } from './app-functions/shared/navbar/navbar.component';
import { CustomerEditComponent } from './Customer/customer-edit/customer-edit.component';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storageMetaReducer } from './app-functions/shared/storage.metareducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerAddComponent,
    NavbarComponent,
    CustomerEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer,{metaReducers:[storageMetaReducer]}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
