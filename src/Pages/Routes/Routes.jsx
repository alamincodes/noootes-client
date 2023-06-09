import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../Shared/PageNotFound";
import NoteDetail from "../Notes/NoteDetail";
import UpdateNote from "../Layout/UpdateNote";

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
        element: (
          <PrivateRoute>
            <Notes />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-note",
        element: (
          <PrivateRoute>
            <CreateNote />
          </PrivateRoute>
        ),
      },
      {
        path: "/note/:id",
        element: (
          <PrivateRoute>
            <NoteDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/note-update/:id",
        element: (
          <PrivateRoute>
            <UpdateNote />
          </PrivateRoute>
        ),
      },
      {
        path: "/note/:id",
        element: (
          <PrivateRoute>
            <NoteDetail />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
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
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
