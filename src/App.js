import React from 'react';
import Appbar from './components/appbar/Appbar';
import Home from './components/home/Home';
import Machines from './components/machines/Machines';
import {
  createBrowserRouter, RouterProvider, Outlet,
} from 'react-router-dom';
import AfterSales from './components/aftersales/AfterSales';
import Aesthetic from './components/aesthetic/Aesthetic';
import About from './components/about/About';
import Blog from './components/blog/Blog';

function Layout() {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Machines',
        element: <Machines />,
      },
      {
        path: '/AfterSales',
        element: <AfterSales />,
      },
      {
        path: '/Aesthetic',
        element: <Aesthetic />,
      },
      {
        path: '/About',
        element: <About />,
      },
       {
        path: '/Blog',
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
