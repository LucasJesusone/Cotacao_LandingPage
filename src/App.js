import React, { Component } from 'react';
import Header from './components/header/Header'
import About from './components/about/About'
import Main from './components/main/Main'

export default class App extends Component {
 render(){
  return (
    <div>

      <Header/>
      <About/>
      <Main/>
    </div>
   );
 }
}