import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sitebar from './components/Sitebar/Sitebar';

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<Sitebar />
			<Content state={props.state} dispatch={props.dispatch} />
		</div>
	);
}

export default App;

