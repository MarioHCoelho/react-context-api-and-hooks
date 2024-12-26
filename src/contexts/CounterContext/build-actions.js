import * as actionTypes from './actions-types'
export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.Increase }),
    decrease: () => dispatch({ type: actionTypes.Decrease }),
    reset: () => dispatch({ type: actionTypes.Reset_Counter }),
    setCounter: (payload) => dispatch({ type: actionTypes.Set_Counter, payload }),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch),
  };
};
const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionTypes.Async_Increase_Start });
  return await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.Async_Increase_End });
      r('RESOLVED!');
    }, 2000);
  });
};
const asyncErrorFn = async (dispatch) => {
  dispatch({ type: actionTypes.Async_Increase_Start });
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.Async_Increase_Error });
      reject(new Error('Deu ruim!'));
    }, 2000);
  });
};
