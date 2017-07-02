import { combineReducers } from 'redux';
import WEATHERDATA  from './reducer_weather';

const rootReducer = combineReducers({
  weather: WEATHERDATA
});

export default rootReducer;
