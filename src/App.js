// import logo from './logo.svg';
import { useState } from 'react';
import './App.css'; 
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  

  return (
    <Router>
    <Navbar title="Textutils" /> 
    <div className="container my-3">
    <Alert alert={alert} />
    {/* <switch>
      <Route path="/about">
        <About showalert = {showAlert}/>
        </Route>
        <Route  path="/">
        <Textform heading= "Enter the text to analyse"/>
        </Route>
      </switch> */}
    <Switch>
        <Route exact path="/about" element={<About showalert = {showAlert}/>} />
        <Route exact path="/" element={<Textform heading= "Enter the text to analyse"/>} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
