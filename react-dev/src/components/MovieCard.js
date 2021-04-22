import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MovieCardContainer } from "./component.style";
import Heading from "./typhography/Heading";
import Text from "./typhography/Text";
import Loading from "./ui/Loading";

const MovieCard = ({ imdbID, Title, Type, Year, Poster, ...restProps }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <MovieCardContainer {...restProps} data-testid="movie-card">
      <div className="movie-poster">
        <Loading loading={!imageLoaded}>
          <img src={Poster} alt={Title} onLoad={() => setImageLoaded(true)} />
        </Loading>
      </div>
      <div className="movie-info">
        <div className="movie-title">
          <Heading className="h4" ellipsis={true} title={Title}>
            <Link to={`/movie/${imdbID}`}>{Title}</Link>
          </Heading>
        </div>
        <div className="movie-subtitle">
          <Text>{Year}</Text>
          <Text className="mh-8">•</Text>
          <Text capitalize={true}>{Type}</Text>
        </div>
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;
