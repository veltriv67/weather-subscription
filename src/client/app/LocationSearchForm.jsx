import React from 'react';
import axios from 'axios';

class LocationSearchForm extends React.Component {
	constructor() {
		super();
		this.state = {
			search: '',
			added_locations: ''
		}
	}

	updateSearch(event) {
		axios.get('/weather-subscription-service/public/search/' + event.target.value)
			.then(res => {
				this.state.results = [];
				res.data.forEach(function (location) {
						this.state.results.push(<li key={'li_' + location.id}>{location.name}</li>);

					}.bind(this)
				);

				this.setState(this.state);
			});
	}

	render() {
		return (
			<div>
				<form>
					<label>Search Locations </label>
					<input type="text"
						   placeholder="Enter Location Info"
						   onChange={this.updateSearch.bind(this)}/>
				</form>
				<ul>
					{this.state.results}
				</ul>
			</div>

		);
	}

}

export default LocationSearchForm;