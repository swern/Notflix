import React from "react"
import ReactDOM from "react-dom"
import ReactRouter from "react-router"
import {Router, Route, IndexRoute, hashHistory} from "react-router"
import Main from "./components/Main.jsx"
import Home from "./components/Home.jsx"
import Listing from "./components/Listing.jsx"

const App = React.createClass({
  render: () => (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="/shows" component={Listing}/>
      </Route>
    </Router>
    )
})

window.onload = function(){
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
}
