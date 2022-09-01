// tipagens das funções?
import {
  deleteTodoAction,
  markCompletoAction,
  markIncompletoAction,
} from './actionsTypes';

export type markCompleteActionCreator = (todo: string) => markCompletoAction;

export type markIncompleteActionCreator = (
  todo: string,
) => markIncompletoAction;

export type deleteTodoActionCreator = (todo: string) => deleteTodoAction;
