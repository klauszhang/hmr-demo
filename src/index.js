import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRootContainer = require('./App').default;
    render(NextRootContainer);
  });
}
