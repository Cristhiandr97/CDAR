import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import firebaseConfig from './firebaseConfig';
import Ventas from './Ventas';


class SegundaPagina extends Component {
  Atras(){
    ReactDOM.render(<App></App>,document.getElementById("root"));
  }
  Casas(){
    ReactDOM.render(<Ventas></Ventas>,document.getElementById("root"));
  }
  render() {
  return (
    <div className="App">
      <header id="header" class="alt">
				<h1><strong><a href="index.html">InmobiliariaR</a></strong> by Duque & Arrechea</h1>
				<nav id="nav">
					<ul>
							<div id="menuLista"></div>	
					</ul>
				</nav>
			</header>
      <a href="#menu" class="navPanelToggle"><span class="fa fa-bars"></span></a>
      <section id="one" class="wrapper style1">
					  <div id="root"></div>
					<div class="container 75%">
						<div class="row 200%">
							<div class="6u 12u$(medium)">
								<header class="major">
									<h2>Quienes somos</h2>
									<p>empresa inmobiliaria</p>
								</header>
							</div>
							<div class="6u$ 12u$(medium)">
								<p>somos una empresa tal dedicada a tal.</p>
								<p>20 años de experiencia......</p>
							</div>
						</div>
					</div>
				</section>
        <section id="two" class="wrapper style2 special">
					<div class="container">
						<header class="major">
							<h2>Fusce ultrices fringilla</h2>
							<p>Maecenas vitae tellus feugiat eleifend</p>
						</header>
						<div class="row 150%">
							<div class="6u 12u$(xsmall)">
								<div class="image fit captioned">
									<img src="images/apartamento.jpg" alt="" />
									<h3>Apartamentos.</h3>
								</div>
							</div>
							<div class="6u$ 12u$(xsmall)">
								<div class="image fit captioned">
									<img src="images/casa.jpg" alt="" />
									<h3>Casas</h3>
								</div>
							</div>
						</div>
						<ul class="actions">
            <input type="button" value="Volver" onClick={this.Atras}></input>
            <input type="button" value="Publica Tu casa" onClick={this.Casas}></input>
							<li><a href="#" class="button special big">Nulla luctus</a></li>
							<li><a href="#" class="button big">Sed vulputate</a></li>
						</ul>
					</div>
				</section>
        <section id="three" class="wrapper style1">
					<div class="container">
						<header class="major special">
							<h2>Variedades de vivienda</h2>
							<p>InmobiliariaR</p>
						</header>
						<div class="feature-grid">
							<div class="feature">
								<div class="image rounded"><img src="images/camo33.jpg" alt="" /></div>
								<div class="content">
									<header>
										<h4>Casas de campo</h4>
										<p>InmobiliariaR</p>
									</header>
									<p>tenemos variedad en las casas de campo.</p>
								</div>
							</div>
							
							<div class="feature">
								<div class="image rounded"><img src="images/apar.jpg" alt="" /></div>
								<div class="content">
									<header>
										<h4>Apartamentos</h4>
										<p>InmobiliariaR</p>
									</header>
									<p>Apartamentos en diferentes zonas de la ciudad.</p>
								</div>
							</div>
							<div class="feature">
								<div class="image rounded"><img src="images/condo.jpg" alt="" /></div>
								<div class="content">
									<header>
										<h4>Casas en condominio</h4>
										<p>InmobiliariaR</p>
									</header>
									<p>Tenemos casas en diferentes condominios.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
 
        <footer id="footer">
				<div class="container">
					<ul class="icons">
						<a href="https://www.facebook.com/Administracion-de-inmuebles-R-R-371118250107841/" class="icon fa-facebook"></a>
						<a href="#" class="icon fa-twitter"></a>
						<a href="https://www.instagram.com/inmobiliariarr/" class="icon fa-instagram"></a>
					</ul>
				
				</div>
			</footer>
    <h1>dsdsds</h1>
    <input type="button" value="Volver" onClick={this.Atras}></input>
      
    </div>
  );
}
}
 
  export default SegundaPagina;
