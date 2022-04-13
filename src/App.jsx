import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Nav, Category, Home, NewsPage, PageNotFound,
} from './components';

function App() {
  const [data, setData] = useState({
    '/general': [{}],
    '/business': [{}],
    '/entertainment': [{}],
    '/health': [{}],
    '/science': [{}],
    '/sports': [{}],
    '/technology': [{}],
    '/search': [{}],
  });
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home data={data} setData={setData} />}
        />
        <Route
          path="/business"
          element={<Category data={data} setData={setData} />}
        />
        <Route
          path="/entertainment"
          element={<Category data={data} setData={setData} />}
        />
        <Route
          path="/health"
          element={<Category data={data} setData={setData} />}
        />
        <Route
          path="/science"
          element={<Category data={data} setData={setData} />}
        />
        <Route
          path="/sports"
          element={<Category data={data} setData={setData} />}
        />
        <Route
          path="/technology"
          element={<Category data={data} setData={setData} />}
        />
        <Route
          path="/:category/:index"
          element={<NewsPage data={data} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
