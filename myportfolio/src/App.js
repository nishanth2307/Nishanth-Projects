import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Test from './components/Navbar/Test';
import Profile from './components/Profile/Profile';
import Parallalex from './components/Parallelex/Parallelex';
import Services from './components/Services/Services';
import MyWork from './components/Work/myWork';
import Contact from './components/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
function App() {
  return (
    <div>
       <Cursor/>
       <section id="Home">
         <Navbar/>
         <Profile/>
        </section>
       <section id="Skills"><Parallalex type={'skills'}/></section>
       <section><Services/></section>
       <section id="About"><Parallalex type={'about'}/></section>
       <MyWork/>
       <section id="Contact"><Contact/></section>
    </div>
  );
}

export default App;
