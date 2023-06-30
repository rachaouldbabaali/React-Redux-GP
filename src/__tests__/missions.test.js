import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('missions component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: '9D1B7E0',
            mission_name: 'FalconSat',
            description: 'Engine failure at 33 seconds and loss of vehicle',
            reserved: false,
          },
          {
            mission_id: 'F3364BF',
            mission_name: 'DemoSat',
            description:
              'Successful first-stage burn and transition to second stage',
            reserved: false,
          },
          {
            mission_id: 'F3F707D',
            mission_name: 'Trailblazer',
            description:
              'Failed to reach orbit and deployed satellites did not reach target orbits',
            reserved: false,
          },
          {
            mission_id: 'F10B304',
            mission_name: 'RatSat',
            description:
              'Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1',
            reserved: false,
          },
        ],
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <missions />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
