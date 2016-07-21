import { Navigation } from 'react-native-navigation';

// screen related book keeping
import { registerScreens } from './pages';
registerScreens();

// this will start our app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'koy.BarcodeScannerPage', // unique ID registered with Navigation.registerScreen
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  animationType: 'none' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
