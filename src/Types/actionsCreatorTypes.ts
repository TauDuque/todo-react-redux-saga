// tipagens das funções?
import {
  deleteTodoAction,
  markCompletoAction,
  markIncompletoAction,
} from './actionsTypes';

export type markCompletoActionCreator = (todo: string) => markCompletoAction;

export type markIncompletoActionCreator = (
  todo: string,
) => markIncompletoAction;

export type deleteTodoActionCreator = (todo: string) => deleteTodoAction;
