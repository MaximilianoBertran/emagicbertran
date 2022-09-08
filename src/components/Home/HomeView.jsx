import React from 'react'
import img1 from '../../img/home1.jpg';
import img2 from '../../img/home2.jpg';
import img3 from '../../img/home3.jpg';
import logo from '../../img/logo.png';

const HomeView = () => {
  return (
    <div className="container px-1 pt-2 mb-4">
        <div className="row">
            <div className="col-lg-12 col-sm-12">
            <h1 className='text-center'><img src={logo} alt="" height="60" className="me-2"/> Epic World MMO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
                <button className='btn btn-danger rounded-pill w-75 fs-2 text-uppercase fw-bold'>
                    Start your adventure now!!!
                </button>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-lg-7">
                <img className="w-100" src={ img2 } alt="img2" />
            </div>
            <div className="col-lg-5">
                <h2>Big Open World</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-lg-5">
                <h2>Wonderfull Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="col-lg-7">
                <img className="w-100" src={ img3 } alt="img3" />
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-lg-7">
                <img className="w-100" src={ img1 } alt="img1" />
            </div>
            <div className="col-lg-5">
                <h2>Different cultures</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeView