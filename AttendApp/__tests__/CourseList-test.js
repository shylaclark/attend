// __tests__/CourseList-test.js
import 'react-native';
import React from 'react';
import CourseList from '../CourseList.js';

import renderer from 'react-test-renderer';
import SignupScreen from "../src/screens/SignupScreen";

it('renders correctly', () => {
  const tree = renderer.create(
    <CourseList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
