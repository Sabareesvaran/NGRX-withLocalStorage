export interface LoginState{
  Email:string,
  Password:string,
  isAuthenticated:boolean
}



export const InitialState: LoginState = {
  Email:"sabareesvaran@yavar.in",
  Password:"codingtown",
  isAuthenticated:false
}

