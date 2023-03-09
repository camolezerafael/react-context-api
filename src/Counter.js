import React, { useContext } from 'react'
import { AppCtx } from './Context'

export default function Counter() {
	const { state, dispatch } = useContext( AppCtx )

	return (
		<div>
			<h4>{ state.counter }</h4>
			<button type="button" onClick={ () => dispatch( { type: 'ADD' } ) }> Counter +</button>
			<button type="button" onClick={ () => dispatch( { type: 'DEC' } ) }> Counter -</button>
		</div>
	)
}