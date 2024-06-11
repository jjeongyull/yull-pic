import { Routes, Route } from "react-router-dom";

import Header from "./Layout/Header";
import MainPage from "./pages/MainPage";
import PhotoPage from "./pages/PhotoPage";
import PhotoDetail from "./pages/PhotoDetail";
import Notice from "./pages/Notice";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Header />} >
            <Route path="/" element={<MainPage />} />
            <Route path="/photo" element={<PhotoPage />} />
            <Route path="/photo/:id" element={<PhotoDetail />} />
            <Route path="/notice" element={ <Notice/>} />
          </Route>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
