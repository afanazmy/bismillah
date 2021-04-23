import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CaretRightOutlined, StarFilled } from "@ant-design/icons";

import action from "../redux/movie/action";

import Heading from "../components/typhography/Heading";
import Text from "../components/typhography/Text";
import Paragraph from "../components/typhography/Paragraph";
import { MovieDetailContainer } from "./container.style";
import Loading from "../components/ui/Loading";

const { showMovie } = action;

const MovieDetail = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMovie({ i: id }));
  }, []);

  const { loading } = movie;

  const {
    Title,
    Poster,
    Year,
    Genre,
    imdbRating,
    imdbVotes,
    Plot,
    Production,
    Director,
    Runtime,
    Language,
    Country,
    Released,
    Actors,
    Writer,
  } = movie?.movie;

  return (
    <MovieDetailContainer data-testid="movie-detail">
      <Text className="breadcrumb">
        <Link to="/">Movies</Link>
        <Text className="mh-8" style={{ fontSize: "0.5em" }}>
          <CaretRightOutlined />
        </Text>
        {Title}
      </Text>

      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="content">
          <div className="movie-poster">
            <Loading loading={!imageLoaded}>
              <img
                src={Poster}
                alt={Title}
                onLoad={() => setImageLoaded(true)}
              />
            </Loading>
          </div>
          <div className="movie-data">
            <Heading className="movie-title">{Title}</Heading>

            <div className="movie-subtitle">
              <Text>{Year}</Text>
              <Text className="mh-8">•</Text>
              <Text>{Genre}</Text>
            </div>

            <div className="movie-rating">
              <StarFilled />
              <Text className="mh-8">{imdbRating}</Text>
              <Text style={{ marginLeft: 12 }}>Votes</Text>
              <Text className="mh-8">{imdbVotes}</Text>
            </div>

            <div className="movie-info">
              <Heading>About</Heading>
              <Paragraph>{Plot}</Paragraph>
            </div>

            <div className="movie-info">
              <Heading>Actors</Heading>
              <Paragraph>{Actors}</Paragraph>
            </div>

            <div className="movie-info">
              <Heading>Writer</Heading>
              <Paragraph>{Writer}</Paragraph>
            </div>

            <div className="movie-info">
              <Heading>Information</Heading>

              <div className="movie-detail">
                <Text className="title">Production</Text>
                <Text>{Production}</Text>
              </div>

              <div className="movie-detail">
                <Text className="title">Director</Text>
                <Text>{Director}</Text>
              </div>

              <div className="movie-detail">
                <Text className="title">Runtime</Text>
                <Text>{Runtime}</Text>
              </div>

              <div className="movie-detail">
                <Text className="title">Language</Text>
                <Text>{Language}</Text>
              </div>

              <div className="movie-detail">
                <Text className="title">Country</Text>
                <Text>{Country}</Text>
              </div>

              <div className="movie-detail">
                <Text className="title">Released</Text>
                <Text>{Released}</Text>
              </div>
            </div>
          </div>
        </div>
      )}
    </MovieDetailContainer>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(MovieDetail);
