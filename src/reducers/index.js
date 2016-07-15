// reducers/index.js

import { combineReducers } from 'redux';
import bills from './bills.js';

const billApp = combineReducers({ bills });

export default billApp;
