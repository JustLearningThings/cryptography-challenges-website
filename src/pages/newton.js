import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './newton.css'

export default function Newton() {
	const history = useHistory()
	let [numbers, setNumbers] = useState('')

	const handleChange = e => {
		e.preventDefault()
		setNumbers(e.target.value)
		// if (e.target.value == 'jafljlks') history.push('')
		// else setNumbers(e.target.value)
	}

	return (
		<div id='newton'>
			<div id='newton-task'></div>
			<div id='inner-container'>
				<h2>Good job!</h2>
				<p>
				Now let's return to ciphers. Use the book that started this journey.
				 Turn to page 42 and use the following sequence to obtain the necessary characters.
				 Turn these characters into numbers using the ASCII code. May Ottendorf aid you.
				</p>
				<input type='text' value={numbers} onChange={e => handleChange(e)} ></input>
			</div>
		</div>
	)
}