import { ActionReducer } from '@ngrx/store';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  let value: any;
  value = localStorage.getItem(localStorageKey);

  if (value === undefined) {
    return false;
  }
  return JSON.parse(value);
}

const localStorageKey = 'customer';

const meta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    const nextState = reducer(state, action);

    let savedState = getSavedState(localStorageKey);

    const abc = { ...nextState.login };

    if (action.type === 'login' && abc.isAuthenticated === true) {
      if (savedState === null) {
        setSavedState(nextState, localStorageKey);
        return reducer(state, action);
      }
      savedState.login.isAuthenticated = true;
      setSavedState(savedState, localStorageKey);
      return reducer(savedState, action);
    }

    if (action.type === 'login' && abc.isAuthenticated === false) {
      return reducer(state, action);
    }

    if (action.type === 'logout') {
      setSavedState(nextState, localStorageKey);
      return reducer(state, action);
    }

    if (
      action.type === 'addCustomer' ||
      action.type === 'deleteCustomer' ||
      action.type === 'modifyCustomer'
    ) {
      const newState = { ...nextState };
      setSavedState(newState, localStorageKey);
      return reducer(state, action);
    }

    if (action.type === '@ngrx/store/init') {
      if (savedState === null) {
        return reducer(state, action);
      }
      return reducer(savedState, action);
    }

    return reducer(state, action);
  };
};

export const storageMetaReducer = meta;
