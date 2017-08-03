import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Stats from './Stats.js';

class Home extends Component {

	render() {
		var username = this.props.data,
			mt = {
				marginTop: '150px'
			};

		return (
			<Grid style={mt}>
				{username !== '' && <Stats username={username}/>}					 	
			</Grid>
		);
	}
}

export default Home;