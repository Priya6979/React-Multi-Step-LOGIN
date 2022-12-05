import './App.css';
import SplashScreen from './components/SplashScreen';
import '../src/style.css';
import Login from './components/Login';
import VerifyDetails from './components/VerifyDetails';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';
import Explore from './components/Explore';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<SplashScreen />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/verifydetails"
					element={<VerifyDetails />}
				/>
				<Route
					path="/signup"
					element={<SignUp />}
				/>
				<Route
					path="/explore"
					element={<Explore />}
				/>
			</Routes>
		</div>
	);
}

export default App;
