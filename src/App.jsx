import { RouterProvider } from "react-router-dom";
import { routes } from "./Pages/Layout/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="mt-20">
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
