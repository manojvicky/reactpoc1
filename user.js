import {createStore} from 'redux';

import rootreducer from './root-reducer';
import data from './data';

const defaultState = {	
	data: data	
}

const store = createStore(root-reducer);

export default store;