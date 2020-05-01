import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ErrorBoundary } from '../../../common/components/ErrorBoundary';
import { routes } from '../routesConfig';
import { RouteConfigInterface } from '../model';

class Routes extends React.Component<any, any> {
  renderRoutes(routes: RouteConfigInterface[], parentPath?: string) {
    let routeList: any[] = [];

    routes.forEach(({ component: Component, path, childRoutes, ...rest }) => {
      routeList.push(
        <Route
          exact
          key={path}
          path={parentPath !== undefined ? parentPath + path : path}
          render={(props) => {
            const combinedProps = { ...rest, ...props };

            return (
              <ErrorBoundary>
                <Component {...combinedProps} />
              </ErrorBoundary>
            );
          }}
          {...rest}
        />,
      );

      if (childRoutes && childRoutes.length > 0) {
        routeList = routeList.concat(this.renderRoutes(childRoutes, path));
      }
    });

    return routeList;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>{this.renderRoutes(routes)}</Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
