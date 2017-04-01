import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import {MouseReducer} from "../components/Mouse/MouseRedux";
import DevTools from '../containers/DevTools';


let data = {
	items: [
		{id: 1,img: 'mouse', isShow: false},
		{id: 2,img: 'mouse', isShow: false},
		{id: 3,img: 'mouse', isShow: false},
		{id: 4,img: 'mouse', isShow: false},
		{id: 5,img: 'mouse', isShow: false},
		{id: 6,img: 'mouse', isShow: false},
		{id: 7,img: 'mouse', isShow: false},
		{id: 8,img: 'mouse', isShow: false},
		{id: 9,img: 'mouse', isShow: false}
	],
	ready: false,
	count: 0
}

const enhancer = compose(
	applyMiddleware(
		thunk
	),
	DevTools.instrument()
)

let store = createStore(
    MouseReducer,
	data,
    enhancer
)

export default store;