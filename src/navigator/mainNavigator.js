import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps194482Navigator from '../features/Maps194482/navigator';
import Additem194481Navigator from '../features/Additem194481/navigator';
import Maps194477Navigator from '../features/Maps194477/navigator';
import UserProfile194473Navigator from '../features/UserProfile194473/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps194482: { screen: Maps194482Navigator },
Additem194481: { screen: Additem194481Navigator },
Maps194477: { screen: Maps194477Navigator },
UserProfile194473: { screen: UserProfile194473Navigator },

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
