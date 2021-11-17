// import {ActionReducer, Action} from '@ngrx/store';
import {merge, pick} from 'lodash-es';

import { Action, ActionReducer, META_REDUCERS} from "@ngrx/store";

import {SharedService} from "../shared/shared.service"
import { environment } from 'src/environments/environment';
function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
    let value:any
    value = localStorage.getItem(localStorageKey)
  return JSON.parse(value);
}

const localStorageKey = 'customer';

// export function storageMetaReducer<S, A extends Action = Action> (reducer: ActionReducer<S, A>) {
// export function storageMetaReducer(reducer: ActionReducer<any>) {

//   let onInit = true; 
//   return function(state, action){
//     // reduce the nextState.
//     const nextState = reducer(state, action);
//     // init the application state.
//     if (onInit) {
//       onInit           = false;
//       const savedState = getSavedState(localStorageKey);
//       return merge(nextState, savedState);
//     }
//     // save the next state to the application storage.
//     const stateToSave = pick(nextState, stateKeys);
//     setSavedState(stateToSave, localStorageKey);
//     return nextState;
//   };
// }


const meta = (reducer:ActionReducer<any>):ActionReducer<any> =>{
    return (state,action)=> {
        console.log("state:",state)
        console.log("action:",action)

        const nextState = reducer(state,action)

        console.log("next state:",nextState)

        console.log("next state wrapped:",{...nextState.login}.isAuthendicated)
         const abc = {...nextState.login}

        // console.log("true wrap:", abc.isAuthendicated)
        // return nextState
        const savedState = getSavedState(localStorageKey);

            if(action.type ==="login" && abc.isAuthendicated === true){
                return reducer(savedState,action)
            }

            if(savedState === undefined || savedState === {} || abc.isAuthendicated === false){
                return nextState
            }

             const newState = {...nextState};

            setSavedState(newState, localStorageKey);
            return reducer(state,action)
        
    }
}

export const storageMetaReducer =  meta
