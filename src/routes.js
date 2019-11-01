import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Repositories from './pages/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      Repositories,
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
