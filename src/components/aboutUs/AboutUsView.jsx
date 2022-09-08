import React from 'react'
import studio from '../../img/studio.jpg';
import img1 from '../../img/studio1.jpg';
import img2 from '../../img/studio2.jpg';

const AboutUsView = () => {

  return (
    <div className="container px-1 pt-2 mb-4">
      <div className="row mb-2">
          <div className="col-lg-12 col-sm-12 text-center">
            <img className="w-75" src={ studio } alt="Studio" />
          </div>
      </div>
      <div className="row">
          <div className="col-lg-12 col-sm-12">
            <p><strong>Welcome to Patata Studio</strong>, we are the creators of Epic World MMO. In this page, you can download the game, buy items and give us your money ;)</p>
          </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-5">
          <h2>Beautiful offices</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="col-lg-7">
          <img className="w-100" src={ img1 } alt="img1" />
        </div>
      </div>
      <hr />
      <div className="row">
      <div className="col-lg-7">
          <img className="w-100" src={ img2 } alt="img2" />
        </div>
        <div className="col-lg-5">
          <h2>Serious developers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        
      </div>
    </div>
  )
}

export default AboutUsView