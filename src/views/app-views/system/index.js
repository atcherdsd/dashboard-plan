import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const System = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/setting`} />
      <Route path={`${match.url}/setting`} component={lazy(() => import(`./setting`))} />
      <Route path={`${match.url}/mobile-app`} component={lazy(() => import(`./mobile-app`))} />
      <Route path={`${match.url}/changelogs`} component={lazy(() => import(`./changelogs`))} />
    </Switch>
  </Suspense>
);

export default System;
