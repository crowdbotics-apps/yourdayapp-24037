import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard19196192Reducer from '../features/Dashboard19196192/redux/reducers'
import Dashboard18196191Reducer from '../features/Dashboard18196191/redux/reducers'
import Dashboard17196190Reducer from '../features/Dashboard17196190/redux/reducers'
import SignIn42196185Reducer from '../features/SignIn42196185/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard19196192: Dashboard19196192Reducer,
Dashboard18196191: Dashboard18196191Reducer,
Dashboard17196190: Dashboard17196190Reducer,
SignIn42196185: SignIn42196185Reducer,

});