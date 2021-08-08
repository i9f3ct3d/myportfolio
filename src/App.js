import React , { Suspense , lazy} from 'react';
import './App.css';

import Navbar from './navbar/navbar'
import Header from './header/header'
import Aboutme from './aboutme/aboutme'

const Journey = lazy(()=>import('./journey/journey'));
const MyProjects = lazy(()=>import('./myprojects/myprojects'));
const ContactMe = lazy(()=>import('./contactme/contactme'));
const MyHobbies = lazy(()=>import('./myhobbies/myhobbies'));


function App() {


  return (
    <div className="App">
      <div className="background"></div>
        <Navbar/>
        <Header/>
        <Aboutme/>
        <Suspense fallback={<div/>}>
        <MyHobbies/>
        </Suspense>
      <Suspense fallback={<div/>}>
        <Journey/>
      </Suspense>
      <Suspense fallback={<div/>}>
        <MyProjects/>
      </Suspense>
      <Suspense fallback={<div/>}>
      <ContactMe/>
      </Suspense>
    </div>
  );
}

export default React.memo(App);
