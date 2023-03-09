import React, {useContext} from 'react';
import {AppCtx} from "./Context";

export default function Counter() {
	const {state,dispatch} = useContext(AppCtx)

	return (
		<div>
			<h4>{state.counter}</h4>
			<button type="button" onClick={() => dispatch({ key:'ADD' })}> Counter + </button>
			<button type="button" onClick={() => dispatch({ key:'DEC' })}> Counter - </button>
		</div>
	);
}