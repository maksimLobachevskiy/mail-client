import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Inbox from "../containers/Inbox/Inbox";
import Favorites from "../containers/Favorites/Favorites";
import Sent from "../containers/Sent/Sent";
import Page404 from "../components/Page404/Page404";
import OneEmail from "../containers/OneEmail/OneEmail";
import Login from "../containers/Login/Login";
import Sidebar from "../components/Sidebar/Sidebar";

const AppRoutes = (props) => {
  const { emails, user, setUser } = props;
  const authenticated = !!user;
  return (
    <div>
      <ProtectedRoute
        path='/'
        authenticated={authenticated}
        component={Sidebar}
      />
      <Switch>
        <ProtectedRoute
          exact
          path='/inbox'
          authenticated={authenticated}
          render={() => <Inbox emails={emails} />}
        />
        <ProtectedRoute
          exact
          path='/inbox/:emailId'
          authenticated={authenticated}
          render={(routerProps) => (
            <OneEmail emails={emails} {...routerProps} />
          )}
        />
        <ProtectedRoute
          exact
          path='/favorites'
          authenticated={authenticated}
          component={Favorites}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path='/sent'
          authenticated={authenticated}
          component={Sent}
        ></ProtectedRoute>
        <Route
          exact
          path='/login'
          render={(routerProps) => (
            <Login
              setUser={setUser}
              {...routerProps}
              authenticated={authenticated}
            />
          )}
        />
        <Route path='*' component={Page404} />
      </Switch>
    </div>
  );
};

const ProtectedRoute = (props) => {
  const { component: Component, authenticated, render, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        if (authenticated) {
          if (render) {
            return render(routerProps);
          } else {
            return <Component {...routerProps} />;
          }
        }

        return <Redirect to='/login' />;
      }}
    />
  );
};

export default AppRoutes;
