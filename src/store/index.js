import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers';
//import saga from './saga';


const loggerMiddleware = createLogger({
  colors: {},
  collapsed: () => true,
});

// const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  loggerMiddleware,
  // sagaMiddleware,
  reduxImmutableStateInvariant(),
  );

const store = createStore(reducer, composeWithDevTools(middleware));

// sagaMiddleware.run(saga);

export default store;
