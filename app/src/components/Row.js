import React, { useState, useEffect } from "react";

// services
import instance from "../services";

// base image url
import baseImgUrl from "../services/baseImgUrl";

// prop types
import PropTypes from 'prop-types';

import "./Row.scss";

const Row = ({ title, fetchData }) => {

  const [movies, setMovies] = useState([]);

  // fetch data from server
  useEffect(() => {

    async function fetch() {
      const res =  await instance.get(fetchData);
      setMovies(res.data.results);
    }

    fetch();

  }, []);

  console.log("Movies: ", movies);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {
          movies?.map(({poster_path, name, id}) => (
            <img
              key={id}
              src={`${baseImgUrl}${poster_path}`}
              alt={name}
              title={name}
              className="row__poster"
            />
          ))
        }
      </div>
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchData: PropTypes.string.isRequired,
};

export default Row;
