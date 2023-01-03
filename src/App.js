import "./App.css";
import React from "react";
import { Originals, action, HorrorMovies } from "./url";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={Originals} />
      {/* we need to change the size of image in the sub section so we are passing isSmall as props.
      By default isSmall will be true or we can add isSmall={true} */}
      <RowPost title="Action" isSmall url={action} />
      <RowPost title="HorrorMovies " isSmall url={HorrorMovies} />
    </div>
  );
}

export default App;
