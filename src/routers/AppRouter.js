import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
