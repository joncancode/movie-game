import {createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk'
import {combinedReducer} from './reducers';

const middlewares = [createLogger()];

export default createStore(combinedReducer, undefined, applyMiddleware(thunk, ...middlewares));
