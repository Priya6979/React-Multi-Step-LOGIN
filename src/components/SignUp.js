import React from 'react';
import logo from '../images/Logo.png';
import design from '../images/Design.png';
import crystal1 from '../images/Crystal1.png';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const navigate = useNavigate();
	const successNavigate = () => {
		navigate('/');
	};
	const arrowReverse = () => {
		navigate('/verifyDetails');
	};
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
			<span
				className="arrow-1"
				onClick={arrowReverse}
			>
				&#8592;
			</span>

			<h2 className="sign"> SIGN UP</h2>
			<h4 className="new">Create an account with the new phone number</h4>
			<div className="sign-up">
				<input
					className="dashing"
					type="text"
				/>
				<span className="spanning">10 digit mobile number</span>
				<input
					className="dashing"
					type="text"
				/>
				<span className="spanning">Email Address</span>
				<input
					className="dashing"
					type="text"
				/>
				<span className="spanning">Name</span>

				<button
					className="btn"
					onClick={successNavigate}
				>
					{' '}
					SIGN UP{' '}
				</button>
			</div>
			<h5>
				By clicking , I accept the
				<span style={{ color: '#2a9ed5' }}>
					Terms and Conditions <span style={{ color: 'white' }}>&</span> Privacy
					Policy
				</span>
			</h5>

			<div>
				<img
					className="crystal-1"
					src={crystal1}
					alt="crystal-1"
				/>
			</div>
		</div>
	);
};

export default SignUp;
