import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));

function LazyRoute({ path, component: Component }) {
  return (
    <Route
      path={path}
      element={
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Component />
        </Suspense>
      }
    />
  );
}

const RoutesManager = () => {
  return (
    <Routes>
      {/* <LazyRoute path={"/"} component={Home} /> */}
      <Route
        path="/"
        element={
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Home />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RoutesManager;
