import React from "react";
import './HeaderNonAuthForm.css'

function HeaderNonAuthForm (props) {
	return (
		<div className="form-header">
			<h4>{props.title}</h4>
		</div>
	)
}

export default HeaderNonAuthForm