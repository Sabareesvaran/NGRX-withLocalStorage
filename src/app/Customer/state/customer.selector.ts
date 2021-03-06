
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState } from "./customer.state";


const getCustomerState = createFeatureSelector<CustomerState>('customers');

export const getCustState = createSelector(getCustomerState,(state)=>{
  return state.customers
});


export const getByid = (props:{id:string})=> createSelector(getCustomerState,(state)=>{

return state.customers.filter(value=>{value.id === props.id})


})

