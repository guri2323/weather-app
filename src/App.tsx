import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes-config";

//Only used when deployiong to GitHub Pages
// const router = createBrowserRouter(routes, {
//   basename: "/weather-app",
// });

function App() {
  return <RouterProvider />;
}

export default App;
