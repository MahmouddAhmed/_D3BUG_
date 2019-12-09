
import React from "react";

import ReactDOM from "react-dom";

// import 'bootstrap/dist/css/bootstrap.css';

import App from "./App.js";

import * as serviceWorker from "./serviceWorker";

import "tachyons";

import store from "./ConfigureStore";

import { Provider } from "react-redux";

import { Link,Route, BrowserRouter  ,browserHistory,Switch } from 'react-router-dom'


function componentApp(props){
    return <App/>
}




ReactDOM.render(

  

    

  <Provider store={store}>

  <App/>

  </Provider>



  ,



  document.getElementById("root")

);



serviceWorker.unregister();
