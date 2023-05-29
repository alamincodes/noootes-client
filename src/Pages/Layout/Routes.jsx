import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Home/Home";
import Notes from "../Notes/Notes";
import About from "../Home/About";
import CreateNote from "../Notes/CreateNote";

export const routes = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/create-note",
        element: <CreateNote />,
      },
      {
        path: "/about",
        element: <About/>,
      },
    ],
  },
]);
