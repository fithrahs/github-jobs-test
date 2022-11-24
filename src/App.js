import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
