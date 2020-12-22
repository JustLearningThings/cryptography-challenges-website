import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './knuth.css'

export default function Knuth() {
	const history = useHistory()
	const address = 'https://www.x.com/'
	let [input, setInput] = useState('')

	const handleChange = e => {
		e.preventDefault()
		if (e.target.value == 'newton') history.push('newton')
		else setInput(e.target.value)
	}

	return (
		<div id='knuth'>
			<p id='here'>newton</p>
			<div id='left'>
				<h1>Well done</h1>
				<p>You will find the address for the next challenge on this page</p>
				<div id='input-container'>
					<label htmlFor='address'>{address}</label>
					<input id='address' type='text' value={input} onChange={e => handleChange(e)} />
				</div>
			</div>
			<div id='right'>
				<h3 id='hint'>Elements will guide you</h3>
			</div>
		</div>
	)
}