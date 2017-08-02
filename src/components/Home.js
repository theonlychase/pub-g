import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Stats from './Stats.js';

class Home extends Component {

	render() {
		var username = this.props.data;
		console.log('user', username);
		return (
			<Grid>
				<Row>
					 <Col md={4}></Col>
					 <Col md={4} className="text-center">
					 {username !== '' && <Stats username={username}/>}					 	
					 </Col>
				   <Col md={4}></Col>
			    </Row>
			</Grid>
		);
	}
}

export default Home;