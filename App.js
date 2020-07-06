import React, { useState } from 'react';
import { YellowBox } from 'react-native';

import Navigator from './Navigation/Navigator';
export default function App() {
  console.disableYellowBox = true;

  return <Navigator />;
}
