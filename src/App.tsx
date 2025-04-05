import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes-config";

const router = createBrowserRouter(routes, {
  basename: "/weather-app",
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
