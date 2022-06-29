import {createStore, compose,applyMiddleware} from 'redux';
import { rootreducer } from './reducer/index';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

const persistConfig = {
    key: 'root',
    storage
  } 
  const intialstate = {
    todolist: {
      todos: [],
      completed_todos: [],
    },
  };

const persistedReducer = persistReducer(persistConfig,rootreducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(persistedReducer,intialstate,composeEnhancers((applyMiddleware(...middlewares))))

const persistor = persistStore(Store);
export   { Store , persistor }