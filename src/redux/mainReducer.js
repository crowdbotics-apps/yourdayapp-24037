import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfSignIn423196385Reducer from '../features/CopyOfSignIn423196385/redux/reducers'
import Dashboard125196383Reducer from '../features/Dashboard125196383/redux/reducers'
import SignIn423196380Reducer from '../features/SignIn423196380/redux/reducers'
import CopyOfCopyOfDashboard210196195Reducer from '../features/CopyOfCopyOfDashboard210196195/redux/reducers'
import CopyOfDashboard210196194Reducer from '../features/CopyOfDashboard210196194/redux/reducers'
import Dashboard210196193Reducer from '../features/Dashboard210196193/redux/reducers'
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
CopyOfSignIn423196385: CopyOfSignIn423196385Reducer,
Dashboard125196383: Dashboard125196383Reducer,
SignIn423196380: SignIn423196380Reducer,
CopyOfCopyOfDashboard210196195: CopyOfCopyOfDashboard210196195Reducer,
CopyOfDashboard210196194: CopyOfDashboard210196194Reducer,
Dashboard210196193: Dashboard210196193Reducer,
Dashboard19196192: Dashboard19196192Reducer,
Dashboard18196191: Dashboard18196191Reducer,
Dashboard17196190: Dashboard17196190Reducer,
SignIn42196185: SignIn42196185Reducer,

});