// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from '../AuthReducer/reducer';
import recipeReducer from './reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
});

export default rootReducer;
