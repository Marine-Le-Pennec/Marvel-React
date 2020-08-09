import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/App.css";
import "./assets/css/reset.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import CharaComics from "./containers/CharaComics";
import Favoris from "./containers/Favoris";
import Signup from "./containers/Signup";
import Login from "./containers/Login";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

library.add(faHeart, faReact);

function App() {
  const token = Cookies.get("token");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [offset, setOffset] = useState(0);
  const [favorisComics, setFavorisComics] = useState([]);
  const [favorisCara, setFavorisCara] = useState([]);

  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [user, setUser] = useState(token || null);

  useEffect(() => {
    if (Cookies.get("favCara")) {
      setFavorisCara(JSON.parse(Cookies.get("favCara")));
    }
  }, []);

  useEffect(() => {
    if (Cookies.get("favComics")) {
      setFavorisComics(JSON.parse(Cookies.get("favComics")));
    }
  }, []);

  // fonction search

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/user/log_in">
            <Login></Login>
          </Route>

          <Route path="/user/signup">
            <Signup
              pseudo={pseudo}
              setPseudo={setPseudo}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              checkPassword={checkPassword}
              setCheckPassword={setCheckPassword}
              user={user}
              setUser={setUser}
            ></Signup>
          </Route>

          <Route path="/characters">
            <Characters
              data={data}
              setData={setData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              page={page}
              setPage={setPage}
              offset={offset}
              setOffset={setOffset}
              name={name}
              setName={setName}
              favorisCara={favorisCara}
              setFavorisCara={setFavorisCara}
            ></Characters>
          </Route>

          <Route path="/character/:id">
            <CharaComics
              data={data}
              setData={setData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
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
              offset={offset}
              setOffset={setOffset}
              favorisComics={favorisComics}
              setFavorisComics={setFavorisComics}
            ></Comics>
          </Route>

          <Route path="/favoris">
            <Favoris
              favorisComics={favorisComics}
              setFavorisComics={setFavorisComics}
              favorisCara={favorisCara}
              setFavorisCara={setFavorisCara}
            ></Favoris>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
