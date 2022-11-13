import React from 'react';
import logo from '../images/Logo.png';
import design from '../images/Design.png';

const Login = () => {
	return (
		<div className="pic">
			<img
				className="photos"
				src={logo}
				alt="logo"
			></img>

			<div>
				<img
					className="pic-2"
					src={design}
					alt="design"
				></img>
			</div>
			<span className="arrow">&#8592;</span>
			<h2 className="login"> LOGIN</h2>
			<h3 className="line">Enter your phone number to proceed</h3>
			<div className="align-login">
				<div>
					<span className="font">+91</span>
					<input
						className="field"
						type="text"
						placeholder="Enter your phone number"
					/>
				</div>

				<button className="btn"> CONTINUE </button>
			</div>
			<h4>
				By clicking , I accept the
				<span style={{ color: '#2a9ed5' }}>
					Terms and Conditions <span style={{ color: 'white' }}>&</span> Privacy
					Policy
				</span>
			</h4>
		</div>
	);
};

export default Login;
