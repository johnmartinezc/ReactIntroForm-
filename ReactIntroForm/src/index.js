import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage.js"
import MovieListPage from "./Pages/MovieListPage"
import MoviePage from "./Pages/MoviePage"
// import SignUpCard from "./Components/SignUpCard"
import App from './App'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element: <HomePage/>
      },
      {
        path: "/MovieListPage",
        element: <MovieListPage/>
      },
      {
        path: "/contact",
        element: <MoviePage />
      },
      
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);