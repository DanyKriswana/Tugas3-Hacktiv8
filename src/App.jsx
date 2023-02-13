import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';

import Navbar from "./Components/Navbar"

import About from "./Pages/About/About";
import Awards from "./Pages/Awards/Awards";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Interest from "./Pages/Interest/Interest";
import Skills from "./Pages/Skills/Skills";

export default class App extends Component {
  render() {
    return(
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/interest" element={<Interest/>}/>
          <Route path="/awards"element={<Awards/>} />
        </Route>
      </Routes>
    </div>
    )
  }
}