import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/index";
import { Logo } from "./constant/imagePath";
import LandingPage from "./pages/LandingPage";
import JobDetailPage from "./pages/DetailPage";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/jobDetail/:id" exact element={<JobDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
