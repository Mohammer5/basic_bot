import { createStore } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import { rootReducer } from './rootReducer';

export const store = createStore(enableBatching(rootReducer));
export const { dispatch } = store;
