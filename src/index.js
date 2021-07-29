import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';

import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


