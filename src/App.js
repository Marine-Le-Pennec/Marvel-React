import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/App.css";
import "./assets/css/reset.css";

import Header from "./components/Header";

import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import CharaComics from "./containers/CharaComics";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/characters">
            <Characters
              data={data}
              setData={setData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              // page={page}
              // setPage={setPage}
            ></Characters>
          </Route>

          <Route path="/character/:id">
            <CharaComics
              data={data}
              setData={setData}
              isLoading={isLoading}
              setisLoading={setIsLoading}
            ></CharaComics>
          </Route>

          <Route path="/comics">
            <Comics
              data={data}
              setData={setData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              page={page}
              setPage={setPage}
            ></Comics>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
