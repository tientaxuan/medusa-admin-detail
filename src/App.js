import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
