import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './FooterNonAuthForm.css'

const propTypes = {
	page: PropTypes.string.isRequired
};

function FooterNonAuthForm ({page}) {
	return (
		<div className="footer-form-links">
			{page === 'signup' && (
			<Fragment>
				<Link className="left" to="/signin">Sign In</Link>
				<Link className="right" to="/restore_password">Forgot Password?</Link>
			</Fragment>
			)}
			{page === 'signin' && (
			<Fragment>
				<Link className="left" to="/signup">Sign Up</Link>
				<Link className="right" to="/restore_password">Forgot Password?</Link>
			</Fragment>
			)}
			{page === 'restore_password' && (
				<Fragment>
					<Link className="left" to="/signup">Sign Up</Link>
					<Link className="right" to="/signin">Sign In</Link>
				</Fragment>
			)}
		</div>
	)
}

FooterNonAuthForm.propTypes = propTypes;

export default FooterNonAuthForm