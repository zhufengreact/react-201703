import gropherReducer from './gopherReducer';
import statusReducer from './statusReducer';

export default function rootReducer (state = {}, action) {
   return {
       gridData: gropherReducer(state.gridData, action),
       indicator: statusReducer(state.indicator, action)
   };
}