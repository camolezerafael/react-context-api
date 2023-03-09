import { createContext, useReducer } from 'react'

export const initialState = {
	counter: 5,
}

export const init = () => {
	return initialState
}

export const reducer = ( state, action ) => {
	switch ( action.type ) {
		case 'ADD':
			return { ...state, counter: state.counter + 1 }
		case 'DEC':
			return { ...state, counter: state.counter - 1 }
		default:
			return state
	}
}

export const AppCtx = createContext( {} )

export function AppCtxProvider( props ) {
	const [ state, dispatch ] = useReducer( reducer, initialState, init )

	return (
		<AppCtx.Provider value={ { state, dispatch } }>
			{ props.children }
		</AppCtx.Provider>
	)
}