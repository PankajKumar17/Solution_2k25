import React from "react";
import MainPage from "./pages/mainPage";
import Events from "./components/Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/events" element={<Events />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
