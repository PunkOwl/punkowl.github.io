import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Template from './component/template';
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route 
          render={rest => (
            <Template>
              <Switch>
                {routes.map(route => (
                  <Route key={route.key} {...route} />
                ))}
              </Switch>
            </Template>
          )}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
