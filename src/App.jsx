import { RouterProvider } from "react-router-dom";
import { routes } from "./Pages/Layout/Routes";

function App() {
  return (
    <div className="mt-20">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
