import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <body>
    <div className="Background">
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"></link>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"></link>
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'></link>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'></link>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'></link>
    
    <header>
      <h3>Start Bootstrap</h3>
      <ul>
        <button class="navi navbar-toggler">
        <li class="top">
          <a class="Link" href="#services">Services</a>
        </li>
        </button>
        <button class="navi">
        <li class="top">
        <a class="Link" href="#portfolio">Portfolio</a>
        </li>
        </button>
        <button class="navi">
        <li class="top">
        <a class="Link" href="#about">About</a>
        </li>
        </button>
        <button class="navi">
        <li class="top">
        <a class="Link" href="#team">Team</a>
        </li>
        </button>
        <button class="navi">
        <li class="top">
        <a class="Link" href="#contact">Services</a>
        </li>
        </button>
      </ul>
    </header>
    <div>
      <p>Welcome to our Studio!</p>
      <h1>It's Nice To Meet You</h1>
      <section class="Tell-me-more-section">
      <button class="Tell-me-more">
        <a class="anchor" href="#services">Tell Me More</a>
      </button>
      </section>
    </div>
    </div>
    </body>
  );
}

export default App;
