/* eslint-disable camelcase */
import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewsList} from './reviews-list.jsx';

it(`should match snapshot`, () => {
  const review1 = {
    user: {
      name: `AAA`,
      avatar_url: `BBB`,
    },
    comment: `CCC`,
    rating: `DDD`,
  };
  const wrapper = renderer.create(<ReviewsList reviews={[review1]} />).toJSON();

  expect(wrapper).toMatchSnapshot();
});