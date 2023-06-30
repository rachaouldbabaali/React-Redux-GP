import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketsList from '../components/Rockets';

const mockStore = configureStore([]);

describe('RocketsList component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      rocket: {
        rockets: [
          {
            id: 1,
            rocket_name: 'Falcon 1',
            description: 'Small-lift launch vehicle',
            flickr_images: [
              'https://imgur.com/DaCfMsj.jpg',
            ],
            reserved: false,
          },
          {
            id: 2,
            rocket_name: 'Falcon 9',
            description: 'Medium-lift launch vehicle, designed for reuse',
            flickr_images: [
              'https://imgur.com/1YUbhAQ.jpg',
              'https://imgur.com/rtKe8Va.jpg',
            ],
            reserved: false,
          },
          {
            id: 3,
            rocket_name: 'Falcon Heavy',
            description: 'Heavy-lift launch vehicle, designed for reuse',
            flickr_images: [
              'https://imgur.com/bKBenS5.jpg',
              'https://imgur.com/N9EMz6b.jpg',
              'https://imgur.com/y53QCRV.jpg',
            ],
            reserved: false,
          },
          {
            id: 4,
            rocket_name: 'Starship',
            description: 'Next-generation launch vehicle and spacecraft',
            flickr_images: [
              'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
            ],
            reserved: false,
          },
        ],
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <RocketsList />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
