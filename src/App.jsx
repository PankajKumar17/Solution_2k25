import React, { Suspense } from "react";
import MainPage from "./pages/MainPage";
import Events from "./components/Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Dynamically import the Team component
const Teams = React.lazy(() => import("./components/Team"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/events" element={<Events />} />
          
          {/* Wrap only the Team component with Suspense */}
          <Route
            path="/team"
            element={
              <Suspense fallback={<div>Loading Team...</div>}>
                <Teams />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
