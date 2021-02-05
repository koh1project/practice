import React, { useState, useEffect } from 'react'
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getMovies } from '../actions';

const Home = (props) => {
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
            <SideMenu appName={"Movie DB"} />
            </div>
            <div className="col-lg-9">
              <Carousel />
              <div className="row">
                <MovieList movies={props.movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <style jsx>{`
        .home-page {
          padding-top: 80px;
        }
      `}
      </style>
    </div>
  )
};

Home.getInitialProps = async ()  => {
  const movies = await getMovies();
  return  {movies};
}
export default Home;