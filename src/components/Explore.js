import React from 'react';
import image_2 from '../images/image_2.png';
import Frame_6 from '../images/Frame_6.png';
import Gem_solo from '../images/Gem_solo.png';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
	const navigate = useNavigate();

	const successNavigate = () => {
		navigate('/explore');
	};
	return (
		<div className="hand-center">
			<div className="dask">
				<div className="card">
					<div>
						<span
							style={{
								marginLeft: '40px',
								fontSize: '80px',
								display: 'block',
								marginBottom: '15px',
							}}
						>
							Hey, Sanchit!
						</span>

						<span style={{ marginLeft: '20px', fontSize: '25px' }}>
							Ask the experts any Design related query
						</span>
					</div>

					<img
						className="profile"
						src={image_2}
						alt=""
					/>
					<img
						className="gem-solo"
						src={Gem_solo}
						alt="gems"
					/>
				</div>
				<span className="date"> 20 November 2022 </span>
				<div className="card-1">
					<h2 className="head"> Hi Sahil, You can ask</h2>
					<h4 style={{ marginLeft: '195px' }}> 11:34 PM</h4>
				</div>
				<div className="card-2">
					<h2 className="head-1">
						Hi Sahil, let me know how can we Solve your{' '}
					</h2>
					<h4> 11:40 PM </h4>
				</div>
				<div className="date-2">11:56 PM</div>
				<div className="date-3"> 12:10 AM</div>
				<div className="input">
					<i className=" fa-solid fa-paperclip fa-3x"></i>
					<span className="query">Type your query here...</span>
					<i className=" fa-solid fa-microphone  fa-3x"></i>
				</div>
				<div className="bottom">
					<i className=" fas fa-regular fa-scroll fa-4x"></i>
					<img
						className="ask"
						src={Frame_6}
						alt="frame6"
					/>
					<img
						className="man"
						src={image_2}
						alt="img2"
					/>
				</div>
			</div>
		</div>
	);
};

export default Explore;
