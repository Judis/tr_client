import React, {Component, Fragment} from "react";
import { Form, Icon, Input, Button} from 'antd';
import HeaderNonAuthForm from "../HeaderNonAuthForm/HeaderNonAuthForm";
import FooterNonAuthForm from "../FooterNonAuthForm/FooterNonAuthForm";

class RestorePassword extends Component {
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
				<HeaderNonAuthForm title="Restore Password"/>
				<div className="form-container">
					<Form onSubmit={this.handleSubmit} className="form-restore-password non-auth-form">
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
							<Button type="primary" htmlType="submit" className="submit-form-button">
								<Icon type="lock" /> Restore password
							</Button>
						</Form.Item>
					</Form>
					<FooterNonAuthForm page="restore_password" />
				</div>
			</Fragment>
		);
	}
}

export default Form.create({ name: 'forgot_password' })(RestorePassword);
