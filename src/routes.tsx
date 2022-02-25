import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Characters } from "./Pages/Characters";
import { Comics } from "./Pages/Comics";
import { Creators } from "./Pages/Creators";
import { Events } from "./Pages/Events";
import { Series } from "./Pages/Series";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/Comics" element={<Comics />} />
        <Route path="/Creators" element={<Creators />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}
