import { useEffect, useState } from 'react';
import Aboutme from './aboutme/aboutme';
import './App.css';
import ContactMe from './contactme/contactme';
import Header from './header/header';
import Journey from './journey/journey';
import MyHobbies from './myhobbies/myhobbies';
import MyProjects from './myprojects/myprojects';
import Navbar from './navbar/navbar';

function App() {

  return (
    <div className="App">
      <div className="background"></div>
      <Navbar/>
      <Header/>
      <Aboutme/>
      <MyHobbies/>
      <Journey/>
      <MyProjects/>
      <ContactMe/>
    </div>
  );
}

export default App;
