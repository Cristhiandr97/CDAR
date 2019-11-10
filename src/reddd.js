import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import SegundaPagina from './SegundaInterfaz';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {n1:0,n2:0,res:0};
    this.sumar = this.sumar.bind(this);
  }

  asignarCampo1(e){
    this.setState({n1:e.target.value});
  }

  sumar(){
    var num1 =  parseInt(this.state.n1);
    var num2 =  parseInt(this.state.n2);
    var resul = num1+num2;
    this.setState({res:resul})

  }

  restar = () => {
    var num1 =  parseInt(this.state.n1);
    var num2 =  parseInt(this.state.n2);
    var resul = num1-num2;
    this.setState({res:resul})
  }

  redirigir(){
    ReactDOM.render(<SegundaPagina></SegundaPagina>,document.getElementById("root"));
  }

  render() {
    return (
      <div className="App">
          Digite numero 1 <input value={this.state.n1} type="text" onChange={(e) => this.asignarCampo1(e)}></input>
          <br></br>
          Digite numero 2 <input value={this.state.n2} type="text" onChange={(data) => this.setState({n2:data.target.value})}></input>
          <br></br>
          <input type="button" value="Sumar" onClick={this.sumar}></input>
          <br></br>
          <input type="button" value="Restar" onClick={this.restar}></input>
          <br></br>
          Resultado <input type="text" value={this.state.res} readOnly="true"></input> 
          <br></br>
          <br></br>
          <br></br>
          <input type="button" value="Reedirigir" onClick={this.redirigir}></input>
          
      </div>
    );
    
  }
}
export default App;
