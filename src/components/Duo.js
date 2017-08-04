import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Duo extends Component {

	render() {
		var naStats = this.props.stats.Stats[3];

		console.log('na', naStats);
		return (
			<div className='card'>
				<Row>
					<Col xs={12}>
						<p className='title'>{naStats.Match.toUpperCase()}</p>
					</Col>
					<Col xs={12} md={3}>
						<div className='ratings'>
							<h4 className='gold'>{naStats.Stats[9].label}</h4>
							<span className='rank'>{naStats.Stats[9].value}</span>
							<h6 className='gold'>{'#' + naStats.Stats[9].rank.toLocaleString() + ' in ' + naStats.Region}</h6>
						</div>
					</Col>
					<div className="clearfix visible-xs-block"></div>
					<Col xs={12} md={9}>
						<Col xs={6} sm={4}>
							<h4 className='gold'>{naStats.Stats[0].label}</h4>
							<h4>{naStats.Stats[0].value}</h4>
							<h6>{'(Top ' + naStats.Stats[0].percentile + '%)'}</h6>
						</Col>
						<Col xs={6} sm={4}>
							<h4 className='gold'>{naStats.Stats[1].label}</h4>
							<h4>{naStats.Stats[1].value + '%'}</h4>
							<h6>{'(Top ' + naStats.Stats[1].percentile + '%)'}</h6>
						</Col>
						<div className="clearfix visible-xs-block"></div>
						<Col xs={6} sm={4}>
							<h4 className='gold'>{naStats.Stats[4].label}</h4>
							<h4>{naStats.Stats[4].value}</h4>
							<h6>{'#' + naStats.Stats[4].rank + '- (Top ' + naStats.Stats[4].percentile + '%)'}</h6>
						</Col>
						<Col xs={6} sm={4}>
							<h4 className='gold'>{naStats.Stats[6].label}</h4>
							<h4>{naStats.Stats[6].value}</h4>
							<h6>{'(Top ' + naStats.Stats[6].percentile + '%)'}</h6>
						</Col>
						<div className="clearfix visible-xs-block"></div>
						<Col xs={6} sm={4}>
							<h4 className='gold'>{naStats.Stats[7].label}</h4>
							<h4>{naStats.Stats[7].value + '%'}</h4>
							<h6>{'(Top ' + naStats.Stats[7].percentile + '%)'}</h6>
						</Col>
						<Col xs={6} sm={4}>
							<h4 className='gold'>{naStats.Stats[21].label}</h4>
							<h4>{naStats.Stats[21].value}</h4>
							<h6>{'#' + naStats.Stats[21].rank + '- (Top ' + naStats.Stats[21].percentile + '%)'}</h6>
						</Col>
						<div className="clearfix visible-xs-block"></div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Duo;