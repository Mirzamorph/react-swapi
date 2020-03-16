import React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store";

import App from "./components/app";
import SwapiService from "./services/swapi-service";
import { SwapiServiceProvider } from "./components/swapi-service-context";
import ErrorBoundary from "./components/error-boundary";

const swapiService = new SwapiService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <SwapiServiceProvider value={swapiService}>
        <App/>
      </SwapiServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);