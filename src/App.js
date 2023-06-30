import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    // Wrap the App component with the Provider component, passing the store as a prop
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/Rockets" element={<Rockets />} />
            <Route path="/Missions" element={<Missions />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Routes>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
