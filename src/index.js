import {h, render} from 'preact';
import './index.scss';
import configureStore from './stores/configureStore';
import App from './components/app';

const store = configureStore();

render(
  <App store={store} />,
  document.querySelector('root')
);
