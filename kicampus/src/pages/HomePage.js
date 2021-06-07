import React from 'react'

import { Link } from 'react-router-dom'
import Png from'./static-homepage.png';
// import Logo from “./logo.png”;

export default function HomePage() {

  return (

    <div className="container">

      <h1>Home </h1>

      <p>

        <Link to="/your desired link">Your desired link.</Link>

      </p>

      <img src={Png}>

      <p>
      <img src={require('./static-homepage.png')} />
      </p>

     //  <img className="img-fluid"
     // src={`${process.env.PUBLIC_URL}./static-homepage.png`}
     // alt="logo"/>

    </div>

    // <div className="container">
    //       //right below here
    //       <img  src={mainLogo} style={nbStyle.logo} alt="fireSpot"/>
    // </div>

  )

}