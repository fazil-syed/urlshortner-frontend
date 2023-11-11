import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Redirect } from "./Pages/Redirect";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:urlCode" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}
