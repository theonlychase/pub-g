import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Squad extends Component {

	render() {
		var naStats = this.props.stats.Stats[7];
			const styles = {
				white: { color: '#fff' },
				gold: { color: '#df9612' },
				title: { color: '#fff', fontSize: '30px' },
				card: {
					width: '100%',
					boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2)',
					borderRadius: '2px',
					background: 'rgba(51, 51, 51, 0.75)',
					padding: '8px'
				}
			}

		console.log('na', naStats);
		return (
			<div style={styles.card}>
				<Row>
					<Col xs={12}>
						<p style={styles.title}>{naStats.Match}</p>
					</Col>
					<Col xs={3}>
						<h4 style={styles.gold}>{naStats.Stats[9].label}</h4>
					</Col>
					<Col xs={9}>
						<Col xs={6} sm={4}>
						<h4 style={styles.gold}>{naStats.Stats[0].label}</h4>
						<h4 style={styles.white}>{naStats.Stats[0].value}</h4>
						<h6 style={styles.white}>{'(Top ' + naStats.Stats[0].percentile + '%)'}</h6>
					</Col>
					<Col xs={6} sm={4}>
						<h4 style={styles.gold}>{naStats.Stats[1].label}</h4>
						<h4 style={styles.white}>{naStats.Stats[1].value + '%'}</h4>
						<h6 style={styles.white}>{'(Top ' + naStats.Stats[1].percentile + '%)'}</h6>
					</Col>
					<Col xs={6} sm={4}>
						<h4 style={styles.gold}>{naStats.Stats[4].label}</h4>
						<h4 style={styles.white}>{naStats.Stats[4].value}</h4>
						<h6 style={styles.white}>{'#' + naStats.Stats[4].rank + '- (Top ' + naStats.Stats[4].percentile + '%)'}</h6>
					</Col>
					<Col xs={6} sm={4}>
						<h4 style={styles.gold}>{naStats.Stats[6].label}</h4>
						<h4 style={styles.white}>{naStats.Stats[6].value}</h4>
						<h6 style={styles.white}>{'(Top ' + naStats.Stats[6].percentile + '%)'}</h6>
					</Col>
					<Col xs={6} sm={4}>
						<h4 style={styles.gold}>{naStats.Stats[7].label}</h4>
						<h4 style={styles.white}>{naStats.Stats[7].value + '%'}</h4>
						<h6 style={styles.white}>{'(Top ' + naStats.Stats[7].percentile + '%)'}</h6>
					</Col>
					<Col xs={6} sm={4}>
						<h4 style={styles.gold}>{naStats.Stats[21].label}</h4>
						<h4 style={styles.white}>{naStats.Stats[21].value}</h4>
						<h6 style={styles.white}>{'#' + naStats.Stats[21].rank + '- (Top ' + naStats.Stats[21].percentile + '%)'}</h6>
					</Col>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Squad;