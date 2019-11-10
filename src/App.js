import React, { Component } from 'react';
import ap3 from './ap3.png';
import './App.css';
import Login from './login.js';



class App extends Component {
  render() {
    
    return (
      <div className="App">
         <div className="App">
      <header id="header" class="alt">
				<h1><strong><a href="index.html">InmobiliariaR</a></strong> by Duque & Arrechea</h1>
				<nav id="nav">
					<ul>
							<div id="menuLista"></div>	
					</ul>
				</nav>
			</header></div>
        <header className="App-header">
        <Login />
          <img src={ap3}  alt="" />
          
          
        </header>
      </div>
    );
  }
}
export default App;

