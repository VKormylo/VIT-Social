import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { Component } from "react";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Suspense } from "react";
import { withSuspense } from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occured");
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.promiseRejectionEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.promiseRejectionEvent);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route
              path="/dialogs"
              render={() => {
                return (
                  <Suspense fallback={<Preloader />}>
                    <DialogsContainer />
                  </Suspense>
                );
              }}
            />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiJSApp;
