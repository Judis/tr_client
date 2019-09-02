import React, {Component, Fragment} from "react";
import { Form, Icon, Input, Button} from 'antd';
import HeaderNonAuthForm from "../HeaderNonAuthForm/HeaderNonAuthForm";
import FooterNonAuthForm from "../FooterNonAuthForm/FooterNonAuthForm";

class Signin extends Component {
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
				<HeaderNonAuthForm title="Sign In" />
				<div className="form-container">
					<Form onSubmit={this.handleSubmit} className="form-signin non-auth-form">
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
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your Password!' }],
							})(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="Password"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className="submit-form-button">
								<Icon type="user" /> Sign in
							</Button>
						</Form.Item>
					</Form>
					<FooterNonAuthForm page="signin" />
				</div>
			</Fragment>
		);
	}
};

export default Form.create({ name: 'signin' })(Signin);
