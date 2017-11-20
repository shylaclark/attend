// __tests__/SignupScreen-test.js
import 'react-native';
import React from 'react';
import SignupScreen from '../SignupScreen.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SignupScreen />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
