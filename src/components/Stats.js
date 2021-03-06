import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import StatCard from './StatCard';
import Squad from './Squad';
import Solo from './Solo';
import Duo from './Duo';
import StatsProfile from './StatsProfile';
import api from '../utils/api';
import ReactLoading from 'react-loading';

class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stats: null,
			loading: true
		};
	}

	componentWillMount() {
		
	}

	componentDidMount() {
		var username = this.props.username;
		
		api.getData(username)
			.then(function(data) {
				console.log(data);
				this.setState({
					stats: data,
					loading: false
				})
		}.bind(this));
	}

	render() {
		var loading = this.state.loading;

		if (loading) {
			return <ReactLoading type='spin' className='ma' color='#df9612'/>
		}
		return (
			<Row>
				<Col md={12}>
					<StatsProfile stats={this.state.stats} />
				</Col>
				<Col md={8}>
					<StatCard stats={this.state.stats} />
					<Solo stats={this.state.stats} />
					<Duo stats={this.state.stats} />
					<Squad stats={this.state.stats} />
				</Col>
				<Col md={4}>
				</Col>
			</Row>
		);
	}
}

export default Stats;