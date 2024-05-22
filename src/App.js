import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './pages/NoPage/404Page';
import InfiniteScroll from './pages/infinite/InfiniteScroll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<InfiniteScroll />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
