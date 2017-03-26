import React from 'react';
import {render} from 'react-dom';
import LocationSearchForm from './LocationSearchForm.jsx';

class App extends React.Component {
	render () {
		return (
			<div>
				<LocationSearchForm />
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
