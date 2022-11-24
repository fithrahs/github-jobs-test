import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        } />
        <Route path="/login" element={
          <PrivateRoute path="/login">
            <Login />
          </PrivateRoute>
        } />
        <Route path="/:id" element={
          <PrivateRoute path="/:id">
            <Detail />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
