import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard18196191Navigator from '../features/Dashboard18196191/navigator';
import Dashboard17196190Navigator from '../features/Dashboard17196190/navigator';
import SignIn42196185Navigator from '../features/SignIn42196185/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
