import './App.css';
import Content from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import Sitebar from './components/Sitebar/Sitebar';

const App = (props) => {
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Sitebar />
			<Content />
		</div>
	);
}

export default App;

