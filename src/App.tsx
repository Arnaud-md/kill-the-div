import { useState } from 'react'
import './App.css'
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Home from './Home';
import Game from './Game';
import End from './End';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/game",
      element: <Game />
    },
    {
      path: "/end",
      element: <End />
    }
  ]);

  return (

      <RouterProvider router={router} />

  )
}

export default App
