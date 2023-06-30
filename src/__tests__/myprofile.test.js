import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from '../Redux/store';
import MyProfile from '../components/MyProfile';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <Provider store={myStore}>
          <BrowserRouter>
            <MyProfile />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
