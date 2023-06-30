const { render, screen, fireEvent } = require('@testing-library/react');
const { Provider } = require('react-redux');
const RocketsList = require('../components/Rockets');
const store = require('../redux/store');

describe('RocketsList Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <RocketsList />
      </Provider>,
    );
  });

  it('renders the RocketsList component', () => {
    const rocketListElement = screen.getByRole('list');
    expect(rocketListElement).toBeInTheDocument();
  });

  it('renders the rocket name', () => {
    const rocketNameElement = screen.getByText(/falcon 1/i);
    expect(rocketNameElement).toBeInTheDocument();
  });

  it('renders the rocket description', () => {
    const rocketDescriptionElement = screen.getByText(/Merlin Engines/i);
    expect(rocketDescriptionElement).toBeInTheDocument();
  });

  it('reserves a rocket when Reserve Rocket button is clicked', () => {
    const reserveButtonElement = screen.getByRole('button', { name: /reserve rocket/i });
    fireEvent.click(reserveButtonElement);
    const cancelButtonElement = screen.getByRole('button', { name: /cancel reservation/i });
    expect(cancelButtonElement).toBeInTheDocument();
  });

  it('cancels the reservation when Cancel Reservation button is clicked', () => {
    const reserveButtonElement = screen.getByRole('button', { name: /reserve rocket/i });
    fireEvent.click(reserveButtonElement);
    const cancelButtonElement = screen.getByRole('button', { name: /cancel reservation/i });
    fireEvent.click(cancelButtonElement);
    const reserveButtonAfterCancelElement = screen.getByRole('button', { name: /reserve rocket/i });
    expect(reserveButtonAfterCancelElement).toBeInTheDocument();
  });
});
