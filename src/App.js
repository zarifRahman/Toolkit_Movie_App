import "./App.scss";
import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail} />
          <Route component={PageNotFound} />
        </Switch>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
