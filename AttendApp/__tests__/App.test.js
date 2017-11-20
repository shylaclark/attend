import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import App from '../src/App';

it('Renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});
