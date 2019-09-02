import React from "react";
import PropTypes from 'prop-types';
import './HeaderNonAuthForm.css'

const propTypes = {
	title: PropTypes.string.isRequired
};

function HeaderNonAuthForm ({title}) {
	return (
		<div className="form-header">
			<h4>{title}</h4>
		</div>
	)
};

HeaderNonAuthForm.propTypes = propTypes;

export default HeaderNonAuthForm;