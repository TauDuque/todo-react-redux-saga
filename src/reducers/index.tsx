import { combineReducers } from 'redux';

import completo from './CompleteReducers';
import incompleto from './IncompleteReducers';

export default combineReducers({
  completo,
  incompleto,
});
