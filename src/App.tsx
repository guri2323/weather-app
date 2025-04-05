import Weather from "./components/Weather/Weather";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes-config";

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
