import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import Checkout from "./Checkout/Checkout";
import Payment from "./Checkout/payment/payment";
import { auth } from "./firebase";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { useStateValue } from "./StateProvider";

function App() {
<<<<<<< HEAD
  const [, dispatch] = useStateValue();
=======
  const [{}, dispatch] = useStateValue();
>>>>>>> ca073aa85892ede6a0df1f0bb5882adb1ca08a5f

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is  ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
<<<<<<< HEAD
  }, [dispatch]);
=======
  }, []);
>>>>>>> ca073aa85892ede6a0df1f0bb5882adb1ca08a5f

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
