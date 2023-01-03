import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  //youtube url id that we need to pass to yotube package
  const [urlid, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        // console.log("hh", response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        // alert("network error");
      });
  });

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log("id", id);
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log("youtube", response.data);
        if (response.data.result !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("array empty");
        }
      })
      .catch((err) => {
        alert("Network error");
      });
  };

  return (
    <div className="row">
      <h2 className="title">{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) => {
          return (
            <img
              onClick={() => handleMovie(obj.id)}
              key={index}
              //we are changing the style depending upon isSmall props
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster"
            />
          );
        })}
      </div>

      {urlid && (
        <div>
          <button
            className="close__button"
            onClick={() => {
              setUrlId(null);
            }}
          >
            x
          </button>{" "}
          <Youtube opts={opts} videoId={urlid.key} />
        </div>
      )}
    </div>
  );
}

export default RowPost;
