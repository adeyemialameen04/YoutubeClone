import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const VideoDetails = lazy(() => import("../pages/VideoDetails/VideoDetails"));

const RoutesManager = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={`/video/:videoId`}
        element={
          <Suspense fallback={<h1>Loading.....</h1>}>
            <VideoDetails />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RoutesManager;
