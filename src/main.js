import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

function render(RootComponent) {
  ReactDOM.render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    document.getElementById('mount'),
  );
}

document.addEventListener('DOMContentLoaded', () => render(Root));

// for development
if (module.hot) {
  module.hot.accept('./Root', () => {
    render(require('./Root').default); // eslint-disable-line global-require
  });
}
