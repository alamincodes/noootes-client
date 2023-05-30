import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Home/Home";
import Notes from "../Notes/Notes";
import About from "../Home/About";
import CreateNote from "../Notes/CreateNote";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Settings from "../auth/settings/Settings";
import ChangePassword from "../auth/settings/ChangePassword";
import UpdateName from "../auth/settings/UpdateName";
import ForgetPassword from "../auth/ForgetPassword";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          {
            path: "/settings/changePassword",
            element: <ChangePassword />,
          },
          {
            path: "/settings/updateName",
            element: <UpdateName />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
