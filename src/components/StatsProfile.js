import React, { Component } from 'react';

class StatsProfile extends Component {

	render() {
		var profile = this.props.stats;
			const styles = {
				card: {
					width: '100%',
					boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2)',
					borderRadius: '2px',
					background: 'rgba(51, 51, 51, 0.75)',
					padding: '8px',
					marginBottom: '10px'
				},
				circle: {
					borderRadius: '100%',
					height: '50px',
					display: 'inline'
				},
				username: {
					display: 'inline',
					color: '#fff',
					verticalAlign: 'middle',
    				paddingLeft: '10px'
				}
			}

		var avatarMed = profile.Avatar.slice(0, -4);
		avatarMed += '_medium.jpg';
		return (
			<div style={styles.card}>
				<img alt='' style={styles.circle} src={avatarMed}/>
				<h2 style={styles.username}>{profile.PlayerName}</h2>
			</div>
		);
	}
}

export default StatsProfile;