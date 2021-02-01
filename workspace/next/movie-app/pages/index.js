import React from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
    </Head>

    <Navbar />

    <div className="container">
      <div className="row">

        <div className="col-lg-3">

        <SideMenu />

        </div>

        <div className="col-lg-9">
          <Carousel />

          <div className="row">

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item One</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Two</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Three</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Four</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Five</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Six</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
      </div>
    </footer>

  </div>
);

export default Home