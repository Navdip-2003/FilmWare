import Banner from "./components/Banner";
import MovieDetais from "./components/MovieDetais";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/movie/:id" element={<MovieDetais />} />      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
