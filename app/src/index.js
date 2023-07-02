import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Components/App';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {
        path: '/catalog',
        element: <button>Ctalog</button>
      },
      {
        path: '/main page',
        element:<div>Main page</div>
      },
      {
          path: '/all products',
        element:<div>All products</div>
      },
        {
          path: '/all sales',
        element:<div>All sales</div>
      },
      ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router= {router}>
    <App />
  </RouterProvider>
);


