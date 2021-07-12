import logo from "./logo.svg";
import "./App.css";
import Nave from './component/Nave';
import Main from "./component/main";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio';
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nave /> */}
        <Main/>
        {/* <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
