import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import React from 'react';

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
