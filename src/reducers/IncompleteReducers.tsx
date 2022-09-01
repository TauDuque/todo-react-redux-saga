// reducers vão setar o state de acordo com as actions
import { Reducer } from 'redux';
import {
  markCompletoAction,
  deleteTodoAction,
  markIncompletoAction,
} from 'Types/actionsTypes';
import { incompleto } from 'Types/storeTypes';

const initialState: incompleto = [];

const IncompletoReducer: Reducer<
  incompleto,
  deleteTodoAction | markCompletoAction | markIncompletoAction
> = (state = initialState, action) => {
  switch (action.type) {
    case 'MARK_INCOMPLETO':
      return [...state, action.todo];
    case 'DELETE_TODO':
    case 'MARK_COMPLETO':
      return [...state.filter(todo => todo !== action.todo)];
    default:
      return [...state];
  }
};

export default IncompletoReducer;
