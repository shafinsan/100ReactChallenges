import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyOutlet from "./Outlet/MyOutlet";
import TypeWritter from "./Main/Simple/TypeWritter";
import MySideBar from "./Main/Simple/MySideBar";
import Clock from "./Main/Simple/Clock";
import Slider from "./Main/Simple/Slider";
import AdvanceSlider from "./Main/Simple/AdvanceSlider";
import Cube from "./Main/Simple/Cube";
import Image3dGallary from "./Main/Simple/Image3dGallary";
import AdvanceLoading from "./Main/Simple/AdvanceLoading";
import Rat from "./Main/Complex/Rat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyOutlet />}>
          <Route index element={<TypeWritter />} />
          <Route path="/simple/sidebar" element={<MySideBar />} />
          <Route path="/simple/clock" element={<Clock />} />
          <Route path="/simple/slider" element={<Slider />} />
          <Route path="/simple/advanceslider" element={<AdvanceSlider />} />
          <Route path="simple/cude" element={<Cube />} />
          <Route path="/simple/3dImage" element={<Image3dGallary />} />
          <Route path="/simple/AdvanceLoading" element={<AdvanceLoading/>} />
          <Route path="/complex/rat" element={<Rat/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
