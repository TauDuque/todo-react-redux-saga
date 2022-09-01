import { completo, incompleto } from 'Types/storeTypes';
import {
  deleteTodoActionCreator,
  markCompletoActionCreator,
  markIncompletoActionCreator,
} from 'Types/actionsCreatorTypes';

interface AppPropsTypes {
  completo: completo;
  incompleto: incompleto;
  deleteTodo: deleteTodoActionCreator;
  markCompleto: markCompletoActionCreator;
  markIncompleto: markIncompletoActionCreator;
}
export default AppPropsTypes;
