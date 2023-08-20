import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Main from './Component/Layout/Main.jsx';
import OrderReview from './Component/OrderReview/OrderReview.jsx';
import Grandapa from './Component/Grandpa/Grandapa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('tshirts.json')
      },
      {
        path: "review",
        element: <OrderReview />,
      },
      {
        path: "/grandpa",
        element: <Grandapa />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
