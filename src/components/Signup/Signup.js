import React, {Component, Fragment} from "react";
import { Form, Icon, Input, Button} from 'antd';
import HeaderNonAuthForm from "../HeaderNonAuthForm/HeaderNonAuthForm";
import FooterNonAuthForm from "../FooterNonAuthForm/FooterNonAuthForm";

class Signup extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Fragment>
				<HeaderNonAuthForm title="Sign Up" />
				<div className="form-container">
					<Form onSubmit={this.handleSubmit} className="form-signup non-auth-form">
						<Form.Item>
							{getFieldDecorator('email', {
								rules: [
									{ required: true, message: 'Please input your email!' },
									{ type: 'email', message: 'Incorrect email format!'}
								],
							})(
								<Input
									prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Email"
									type="email"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('name', {
								rules: [
									{ required: true, message: 'Please input username!' }
								],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Name"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [
									{ required: true, message: "Please input your password!" },
									{ min: 8, message: "Minimum 8 characters"}
								],
							})(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="Password"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password_confirm', {
								rules: [{ required: true, message: 'Please confirm the password!' }],
							})(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="Password Confirmation"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className="submit-form-button">
								<Icon type="user" /> Sign up
							</Button>
						</Form.Item>
					</Form>
					<FooterNonAuthForm page="signup" />
				</div>
			</Fragment>
		);
	}
};

export default Form.create({ name: 'signup' })(Signup);
