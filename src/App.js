import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//importando los componentes
import Logo from "./components/Logo";
import ModalLogin from "./components/ModalLogin";
import firebase from "firebase";
import Menu from "./components/Menu";
import Header from "./components/Header/Header";
/*import Order from './components/Order/Order';*/
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import style from "./App.module.css";
import IncomingOrders from "./components/IncomingOrders/IncomingOrders";
import CounterOne from "./components/Counters/CounterOne";

class App extends Component {
  state = {
    auth: false,
  };

  firebaseAuth = firebase.auth().onAuthStateChanged(() => {
    if (firebase.auth().currentUser !== null) {
      let splittedEmail = firebase.auth().currentUser.email.split("");
      let emailFirstLetter = splittedEmail[0];
      let loginRole;
      emailFirstLetter === "m" ? (loginRole = "mesero") : (loginRole = "chef");
      this.setState({
        auth: true,
        role: loginRole,
      });
    }

    //Función para probar flujo con logout automático al cerrar app (solo prueba)
    if (firebase.auth().currentUser !== null) {
      setTimeout(() => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.setState({
              auth: false,
              role: null,
            });
            console.log(
              "Sesión cerrada correctamente",
              this.state.auth,
              this.state.role
            );
            alert(
              "Sesión cerrada automáticamente (prueba) - Después de esto se debería redireccionar a la pantalla de inicio."
            );
          });
      }, 8000);
    }
  });

  render() {
    let path = null;
    let pathRole = null;
    if (this.state.auth) {
      if (this.state.role === "chef") {
        path = <Redirect to="/chef" />;
        pathRole = "chef";
      } else if (this.state.role === "mesero") {
        path = <Redirect to="/mesero" />;
        pathRole = "mesero";
      }
    }

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact>
              {this.state.role === pathRole ? path : null}
              {console.log(this.state.role, path)}
              <Logo />
              <ModalLogin />
            </Route>
            <Route path="/mesero" exact>
              <Header />
              <section className={style.mainContainer}>
                <div className={style.btnContainer}>
                  <h4 className={style.meseroH1}>Mesero</h4>
                  <Link to="/mesero/menu-desayuno">
                    <Button className={style.optionBtn} type="button">
                      Menú desayuno
                    </Button>
                  </Link>
                  <Link to="/mesero/menu-almuerzo-cena">
                    <Button className={style.optionBtn} type="button">
                      Menú almuerzo y cena
                    </Button>
                  </Link>
                </div>
              </section>
            </Route>
            <Route path="/mesero/menu-desayuno" exact>
              <Header />
              <Menu />
              <CounterOne />
            </Route>
            <Route path="/mesero/menu-almuerzo-cena" exact>
              <p>no lo pienses más</p>
            </Route>
            <Route path="/chef" exact>
              <Header />
              <IncomingOrders />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
