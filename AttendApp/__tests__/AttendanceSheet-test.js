// __tests__/AttendanceSheet-test.js
import 'react-native';
import React from 'react';
import AttendanceSheet from '../AttendanceSheet.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AttendanceSheet />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
