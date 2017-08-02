import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PlayerInput from './PlayerInput';
import api from '../utils/api';

class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stats: null,
			loading: true
		};
	}

	componentDidMount() {
		var username = this.props.username;
		
		api.getData(username)
			.then(function(data) {
				console.log(data);
		}.bind(this));
	}

	render() {
		return (
			<Grid>
				<Row>
					 <Col md={4}></Col>
					 <Col md={4} className="text-center">
					 
					 </Col>
				   <Col md={4}></Col>
			    </Row>
			</Grid>
		);
	}
}

export default Stats;