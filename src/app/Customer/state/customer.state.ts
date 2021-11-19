export interface Customer {
  id:string
  Name: string;
  Phone: string;
  Address: string;
  Age: string;
}

export interface CustomerState {
  customers: Customer[];
}

export const InitialState: CustomerState ={
  customers:[]
}

