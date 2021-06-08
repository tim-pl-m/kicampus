import React from 'react'

import { Link } from 'react-router-dom'
import Png from'./static-homepage.png';
// import Logo from “./logo.png”;

export default function HomePage() {

  return (

    <div className="container">

      <p>
      <img src={Png} alt=""/>
      </p>

      <h1>Home </h1>

      <p>

        <Link to="/your desired link">Your desired link.</Link>

      </p>

    </div>

  )

}