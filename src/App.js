import Banner from "./components/Banner";
import MovieDetais from "./components/MovieDetais";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ToastContainerComponent from "./components/ToastContainerComponent";
import Profile from "./compo/Profile";

function App() {
  return (
    <div className="bg-black m-0 p-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies />
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
          <Route path="/movie/:id" element={<MovieDetais />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainerComponent />
    </div>
    
  );
}

export default App;
