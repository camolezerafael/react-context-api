import React from 'react'

import {ThemeContext} from './ThemeContext'

export default function ThemeButton(props){
	return (
		<ThemeContext.Consumer>
			{ theme => (
				<div>
					<p>{JSON.stringify(theme.theme)}</p>
					<button {...props} type="button" style={{background: theme.theme === 'light' ? '#fff' : '#ccc'}}>{props.label}</button>
				</div>
			)}
		</ThemeContext.Consumer>
	)
}