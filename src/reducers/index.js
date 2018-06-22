//dont think this next line should be commented, but it's not being used
//import { ADD_NOTE, CHECK_OFF, DELETE_NOTE } from '../actions';

const initialState = {
    entry: []
  };
  
export const combinedReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ENTRY':
        return {
          ...state,
          movie: [
            ...state.actor,
            {
              ...action.entry
            }
          ]
        };
      default:
        return state;
    }
  };
  