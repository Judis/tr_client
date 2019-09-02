import React from "react";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import RestorePassword from "../RestorePassword/RestorePassword";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './NonAuthForm.css'

function NonAuthForm() {
		return (
			<Router>
				<Route path="/restore_password" component={RestorePassword} />
				<Route path="/signup" component={Signup} />
				<Route path="/(|signin)" component={Signin} />
			</Router>
		)
}

export default NonAuthForm