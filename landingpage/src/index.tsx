<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> b809026fa62f37f685ebd492e66a25e27d56aa2c
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
