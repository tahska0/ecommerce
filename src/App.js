import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

function App() {

  const [ {user}, dispatch ] = useStateValue();

  useEffect( () => {

    auth.onAuthStateChanged( (authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if( authUser ) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } 
      else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }

    });

  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </ Route>
          <Route path = '/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
