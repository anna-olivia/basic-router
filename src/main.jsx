import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Anleitung from "./routes/Anleitung.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import Landing from "./routes/Landing.jsx";
import Spielfeld from './routes/Spielfeld.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Landing />,
        children: [{path: '/anleitung', element: <Anleitung />},
                   
        ]
       },
       {path: '/spiel', element: <Spielfeld />}

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
