
import { loginReducer } from "../../login/state/login.reducer";
import { customerReducer } from "../../Customer/state/customer.reducer";
import { CustomerState } from "../../Customer/state/customer.state";

export interface AppState{
  customer:CustomerState
}

export const appReducer = {
 customers:customerReducer,
 login:loginReducer

}
