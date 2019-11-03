import React from 'react';
import renderer from 'react-test-renderer';
import {CardOffersList} from './card-offers-list.jsx';

it(`should match snapshot`, () => {
  const offers = [{
    name: `AAA`,
    price: 120,
    type: `AAA`,
    src: `AAA`,
    position: [123, 123],
  }];

  const wrapper = renderer.create(<CardOffersList offers={offers} />).toJSON();

  expect(wrapper).toMatchSnapshot();
});
