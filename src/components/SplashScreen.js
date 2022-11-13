import React from 'react';
import logo from '../images/Logo.png';
import design from '../images/Design.png';
import crystal from '../images/Crystal.png';
const SplashScreen = () => {
	return (
		<div className="logo">
			<img
				className="img-main"
				src={logo}
				alt="logo"
			></img>
			<div>
				<img
					className="img-2"
					src={design}
					alt="design"
				></img>
			</div>

			<div>
				<img
					className="img-3"
					src={crystal}
					alt="crystal"
				/>
			</div>
		</div>
	);
};

export default SplashScreen;
