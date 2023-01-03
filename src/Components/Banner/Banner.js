import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/constants";
import "./Banner.css";
//we just called the axios from the file were we have created axios instance
//we are calling the custom axios that we created
import axios from "../../axios";

function Banner() {
  const [movie, setMovie] = useState();
  //we just need to run the useEffect only once for that we are using empty square bracket
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length) + 0
          ]
        );
      });
  }, []);
  return (
    <div
      // we just need to attach base url as well.along with the movie
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        {/* egane movie.title kodkumpo error verm "cannot read the proppery of undefined" */}
        {/* we just need to show the title after the useEffect run.for solving that we use ternary operator */}
        {/* <h1 className="title">{movie.title}</h1> */}
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner__buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade__bottom"></div>
    </div>
  );
}

export default Banner;
