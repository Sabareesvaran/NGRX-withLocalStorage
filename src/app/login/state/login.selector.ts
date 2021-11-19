import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.state";

const isAuth = createFeatureSelector<LoginState>('login');

export const isAuthenticated = createSelector(isAuth,(state)=>{
  return state.isAuthenticated
});
