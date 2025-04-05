import { ReactElement, lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

interface RouteConfig {
  path: string;
  element: ReactElement;
  title: string;
}

const LogIn = lazy(() => import("./components/Form/Form"));
const Products = lazy(() => import("./components/Products/Products"));
const ProductVariant = lazy(
  () => import("./components/ProductVariant/ProductVariant")
);
const WeatherApp = lazy(() => import("./components/Weather/Weather"));

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <LogIn />
      </Suspense>
    ),
    title: "Login",
  },
  {
    path: "/products",
    element: (
      <Suspense fallback={<Loader />}>
        <Products />
      </Suspense>
    ),
    title: "All Products",
  },
  {
    path: "/products/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <ProductVariant />
      </Suspense>
    ),
    title: "Product Details",
  },
  {
    path: "/products/weather",
    element: (
      <Suspense fallback={<Loader />}>
        <WeatherApp />
      </Suspense>
    ),
    title: "All Products",
  },
];
