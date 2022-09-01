// essas funções serão chamadas do componente para ativar uma ação
import {
  deleteTodoActionCreator,
  markCompletoActionCreator,
  markIncompletoActionCreator,
} from 'Types/actionsCreatorTypes';

export const markCompleto: markCompletoActionCreator = todo => {
  return {
    type: 'MARK_COMPLETO',
    todo: todo,
  };
};

export const markIncompleto: markIncompletoActionCreator = todo => {
  return {
    type: 'MARK_INCOMPLETO',
    todo: todo,
  };
};

export const deleteTodo: deleteTodoActionCreator = todo => {
  return {
    type: 'DELETE_TODO',
    todo: todo,
  };
};
