import React from 'react';
import Appbar from './components/appbar/Appbar';
import Home from './components/home/Home';
import Machines from './components/machines/Machines';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import AfterSales from './components/aftersales/AfterSales';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
