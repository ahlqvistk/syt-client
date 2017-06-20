import {h} from 'preact';
import {Provider} from 'preact-redux';
import Title from './title';

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
