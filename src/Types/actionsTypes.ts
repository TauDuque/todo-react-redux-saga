// tipagem de actions

export interface markCompletoAction {
  type: 'MARK_COMPLETO';
  todo: string;
}

export interface markIncompletoAction {
  type: 'MARK_INCOMPLETO';
  todo: string;
}

export interface deleteTodoAction {
  type: 'DELETE_TODO';
  todo: string;
}
