import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import './FooterNonAuthForm.css'

function FooterNonAuthForm (props) {
	return (
		<div className="footer-form-links">
			{props.page === 'signup' &&
			<Fragment>
				<Link className="left" to="/signin">Sign In</Link>
				<Link className="right" to="/restore_password">Forgot Password?</Link>
			</Fragment>
			}
			{props.page === 'signin' &&
			<Fragment>
				<Link className="left" to="/signup">Sign Up</Link>
				<Link className="right" to="/restore_password">Forgot Password?</Link>
			</Fragment>
			}
			{props.page === 'restore_password' &&
				<Fragment>
					<Link className="left" to="/signup">Sign Up</Link>
					<Link className="right" to="/signin">Sign In</Link>
				</Fragment>
			}
		</div>
	)
}

export default FooterNonAuthForm