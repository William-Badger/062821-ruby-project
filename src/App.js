import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import MainContainer from "./MainContainer"
import Login from "./Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/home">
      <MainContainer />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
