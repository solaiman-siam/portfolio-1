import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'flowbite';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from './layout/MainLayouts';
import Error from './pages/Error';
import Home from './pages/Home';




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <Error></Error>,
    children: ([
      {
        index: true,
        element: <Home></Home>
      }
    ])
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
