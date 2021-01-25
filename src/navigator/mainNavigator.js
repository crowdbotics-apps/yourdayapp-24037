import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfSettings13196375Navigator from '../features/CopyOfSettings13196375/navigator';
import CopyOfSettings13196374Navigator from '../features/CopyOfSettings13196374/navigator';
import Settings13196196Navigator from '../features/Settings13196196/navigator';
import CopyOfCopyOfDashboard210196195Navigator from '../features/CopyOfCopyOfDashboard210196195/navigator';
import CopyOfDashboard210196194Navigator from '../features/CopyOfDashboard210196194/navigator';
import Dashboard210196193Navigator from '../features/Dashboard210196193/navigator';
import Dashboard19196192Navigator from '../features/Dashboard19196192/navigator';
import Dashboard18196191Navigator from '../features/Dashboard18196191/navigator';
import Dashboard17196190Navigator from '../features/Dashboard17196190/navigator';
import SignIn42196185Navigator from '../features/SignIn42196185/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfSettings13196375: { screen: CopyOfSettings13196375Navigator },
CopyOfSettings13196374: { screen: CopyOfSettings13196374Navigator },
Settings13196196: { screen: Settings13196196Navigator },
CopyOfCopyOfDashboard210196195: { screen: CopyOfCopyOfDashboard210196195Navigator },
CopyOfDashboard210196194: { screen: CopyOfDashboard210196194Navigator },
Dashboard210196193: { screen: Dashboard210196193Navigator },
Dashboard19196192: { screen: Dashboard19196192Navigator },
Dashboard18196191: { screen: Dashboard18196191Navigator },
Dashboard17196190: { screen: Dashboard17196190Navigator },
SignIn42196185: { screen: SignIn42196185Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
