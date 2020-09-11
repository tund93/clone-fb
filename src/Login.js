import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "./Firebase";
import { provider } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [, dispatch] = useStateValue();

  const signIn = () => {
    //Sign in
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("result :>> ", result);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.massage);
      });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
