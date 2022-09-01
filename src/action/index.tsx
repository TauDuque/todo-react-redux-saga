// essas funções serão chamadas do componente para ativar uma ação
import {
  deleteTodoActionCreator,
  markCompleteActionCreator,
  markIncompleteActionCreator,
} from 'Types/actionsCreatorTypes';

export const markCompleto: markCompleteActionCreator = todo => {
  return {
    type: 'MARK_COMPLETO',
    todo: todo,
  };
};

export const markIncompleto: markIncompleteActionCreator = todo => {
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
