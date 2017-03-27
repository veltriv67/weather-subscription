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

	addLocation(location_id, event) {
		this.state.added_locations.push(location_id);
		this.setState(this.state);
		// axios.get('/weather-subscription-api/public/add/' + location_id)
		// 	.then(res => {
		// 		this.state.added_locations.push(location_id);
		// 		this.setState(this.state);
		// 	});
	}

	updateSearch(event) {
		axios.get('/weather-subscription-api/public/search/' + event.target.value)
			.then(res => {
				this.state.results = [];
				res.data.forEach(function (location) {
						let action = '';

						if (this.state.added_locations[location.id]) {
							action = <span>Added</span>;
						}
						else {
							action = <button key={location.id} onClick={(event) => this.addLocation(event, location.id)}>
								Add</button>;
						}

						this.state.results.push(<li key={'li_' + location.id}>{location.name} {action} </li>);

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
