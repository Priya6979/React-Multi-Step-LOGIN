import './App.css';
import SplashScreen from './components/SplashScreen';
import '../src/style.css';
import Login from './components/Login';
import VerifyDetails from './components/VerifyDetails';
import SignUp from './components/SignUp';

function App() {
	return (
		<div className="App">
			{/*<SplashScreen />*/}
			{/*<Login />*/}
			{/*<VerifyDetails />*/}
			<SignUp />
		</div>
	);
}

export default App;
