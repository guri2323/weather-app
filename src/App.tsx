import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes-config";

//Only used when deployiong to GitHub Pages
// const router = createBrowserRouter(routes, {
//   basename: "/weather-app",
// });

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
