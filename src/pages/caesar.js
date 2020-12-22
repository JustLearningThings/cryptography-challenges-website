import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './caesar.css'

export default function Caesar() {
	const history = useHistory()
	let [color, setColor] = useState('')

	const handleInput = e => {
		e.preventDefault()

		if (e.target.value == 'bdb99f') history.push('/knuth')
		else setColor(e.target.value)
	}

	return (
		<div id='caesar'>
			<div id='task'>
				<h2>Your journey starts here</h2>
				<p>To continue write the value of this box's color below</p>
				<div id='input-container'>
					<label htmlFor='color'>#</label>
					<input id='color' type='text' value={color} onChange={e => handleInput(e)}></input>
				</div>
			</div>
		</div>
	)
}