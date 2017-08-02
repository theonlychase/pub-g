import axios from 'axios';
import config from './config';

var api = {

	getData: function(data) {
		return axios.get('https://pubgtracker.com/api/profile/pc/' + data, config)
		.then(function(stats) {
			console.log(stats);
			return stats.data;
		});
	}

}

export default api;