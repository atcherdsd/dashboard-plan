import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import Setting from "./setting";

const Clients = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/client-list`} />
      <Route path={`${match.url}/client-list`} component={lazy(() => import(`./client-list`))} />
      <Route path={`${match.url}/setting/:id`} component={Setting} />
      <Route path={`${match.url}/client-group`} component={lazy(() => import(`./client-group`))} />
    </Switch>
  </Suspense>
);

export default Clients;