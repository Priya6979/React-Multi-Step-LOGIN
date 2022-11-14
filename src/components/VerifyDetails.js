import React from 'react';
import logo from '../images/Logo.png';
import design from '../images/Design.png';
import { useNavigate } from 'react-router-dom';

const VerifyDetails = () => {
	const navigate = useNavigate();
	const successNavigate = () => {
		navigate('/signup');
	};
	const arrorReverse = () => {
		navigate('/login');
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
				className="arrow-2"
				onClick={arrorReverse}
			>
				&#8592;
			</span>

			<h2 className="login"> VERIFY DETAILS </h2>
			<h3 className="line"> OTP sent 9503746583</h3>
			<div className="align-center">
				<div className="align">
					<input
						className="verify"
						type="text"
						placeholder="6"
					/>
					<input
						className="verify"
						type="text"
						placeholder="5"
					/>
					<input
						className="verify"
						type="text"
						placeholder="0"
					/>
					<input
						className="verify"
						type="text"
						placeholder="9"
					/>
					<input
						className="verify"
						type="text"
						placeholder="2"
					/>
					<input
						className="verify"
						type="text"
						placeholder="1"
					/>
				</div>

				<button
					className="btn"
					onClick={successNavigate}
				>
					{' '}
					VERIFY AND PROCEED{' '}
				</button>
			</div>
		</div>
	);
};

export default VerifyDetails;
