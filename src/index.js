import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import MovieSearch from './components/MovieSearch';

import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route exact path="/" component={MovieSearch} />
        <Route exact path="/movie-list" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


