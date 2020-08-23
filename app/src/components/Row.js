import React, { useState, useEffect } from "react";

// services
import instance from "../services";

// base image url
import baseImgUrl from "../services/baseImgUrl";

// prop types
import PropTypes from 'prop-types';

import "./Row.scss";

const Row = ({ title, fetchData, isLargeRow }) => {

  const [movies, setMovies] = useState([]);

  // fetch data from server
  useEffect(() => {

    async function fetch() {
      const res =  await instance.get(fetchData);
      setMovies(res.data.results);
    }

    fetch();

  }, []);


  return (
    <div className="row">
      <h2 className="row__title">{isLargeRow ? title.toUpperCase() : title}</h2>
      <div className="row__posters">
        {
          movies?.map(({poster_path, name, id, backdrop_path}) => (
            <img
              key={id}
              src={`${baseImgUrl}${isLargeRow ? poster_path : backdrop_path}`}
              alt={name}
              title={name}
              className={`row__poster ${isLargeRow && "row__poster--large"}`}
            />
          ))
        }
      </div>
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
  fetchData: PropTypes.string.isRequired,
};

export default Row;
