import { Messenger } from './pages'

const App = () => 
{
	const theme = 'dark';
	
	return (
		<div className={"App " + theme}>
			<Messenger />
		</div>
	);
}

export default App;
