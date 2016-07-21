'use strict';

import { Navigation } from 'react-native-navigation';

import BarcodeScannerPage from './BarcodeScannerPage';

export function registerScreens() {
  Navigation.registerComponent('koy.BarcodeScannerPage', () => BarcodeScannerPage);
}

/* vi: set et ts=2 sw=2: */
