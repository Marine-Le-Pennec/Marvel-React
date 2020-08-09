import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { baseUrl } from "../globals";

const Signup = ({
  password,
  setPassword,
  checkPassword,
  setCheckPassword,
  email,
  setEmail,
  pseudo,
  setPseudo,
  user,
  setUser,
}) => {
  const history = useHistory();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckPasswordChange = (event) => {
    const value = event.target.value;
    setCheckPassword(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePseudoChange = (event) => {
    const value = event.target.value;
    setPseudo(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!pseudo || !email || !password) {
      alert("Veuillez remplir tous les champs!");
    } else if (password !== checkPassword) {
      alert("Mot de passe non identiques");
    } else {
      try {
        const response = await axios.post(`${baseUrl}/user/signup`, {
          username: pseudo,
          email: email,
          password: password,
        });

        if (!response.data.token) {
          alert("Utilisateur déjà existant");
        } else {
          const token = response.data.token;
          Cookies.set("token", token);
          setUser({ token: token });
          alert("Welcome!");
          history.push("/Home");
        }
      } catch (e) {
        alert("An error occurred");
      }
    }
  };
  return (
    <div>
      <div>
        <h1>Welcome, new member of the Marvel Team!</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Pseudo*</h3>
          <input
            type="texte"
            name="pseudo"
            value={pseudo}
            onChange={handlePseudoChange}
          ></input>
          <h3>email adress*</h3>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <div className="passwordInput">
            <span>
              <h3>Password*</h3>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </span>
            <span>
              <h3>Confirm you password</h3>
              <input
                type="password"
                name="password"
                value={checkPassword}
                onChange={handleCheckPasswordChange}
              ></input>
            </span>
          </div>

          <button type="submit" value="Submit">
            Create your account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
