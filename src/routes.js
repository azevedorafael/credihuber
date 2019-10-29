import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#19b3ae',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
