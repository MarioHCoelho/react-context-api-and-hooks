import { initialState } from '.'
import * as actionTypes from './actions-types'

export const reducer = (state,action) =>
{
  console.log (action);

  switch (action.type) {
    case actionTypes.Increase:
      return {...state, counter: state.counter+1}
    case actionTypes.Decrease:
      return {...state, counter: state.counter-1}
    case actionTypes.Reset_Counter:
      return {...initialState}
    case actionTypes.Set_Counter:
          return {...state,...action.payload};
    case actionTypes.Async_Increase_Start:
      return {...state, loading:true}
      case actionTypes.Async_Increase_End:
      return {...state, loading:false, counter:state.counter+1}
      case actionTypes.Async_Increase_Error:
      return {...state, loading:false}
  }
return state;

}
