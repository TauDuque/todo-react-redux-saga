// reducers vão setar o state de acordo com as actions
import { Reducer } from 'redux';
import {
  markCompletoAction,
  deleteTodoAction,
  markIncompletoAction,
} from 'Types/actionsTypes';
import { completo } from 'Types/storeTypes';

const initialState: completo = [];

const CompletoReducer: Reducer<
  completo,
  deleteTodoAction | markCompletoAction | markIncompletoAction
> = (state = initialState, action) => {
  switch (action.type) {
    case 'MARK_COMPLETO':
      return [...state, action.todo];
    case 'MARK_INCOMPLETO':
    case 'DELETE_TODO':
      return [...state.filter(todo => todo !== action.todo)];
    default:
      return [...state];
  }
};

export default CompletoReducer;
