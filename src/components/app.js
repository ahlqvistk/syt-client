import {h} from 'preact';
import {Provider} from 'preact-redux';
import Title from './title';

import io from 'socket.io-client';
const socket = io('localhost:3000');

socket.on('connect', () => {
  console.log('connected');
});

const App = ({store}) => {
  return (
    <Provider store={store}>
      <div class='app'>
        <Title />
      </div>
    </Provider>
  );
};

export default App;
