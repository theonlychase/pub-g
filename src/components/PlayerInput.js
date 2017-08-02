import React, { Component } from 'react'; 
import { Link }  from "react-router-dom";
import { Form, FormGroup, FormControl } from 'react-bootstrap';

class PlayerInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ""
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(
	      this.state.username
	    );
	}

	handleChange = (event) => {
		var value = event.target.value;

		this.setState({
			username: value
		});
	}

	render() {
		var match = this.props.match,
		    username = this.state.username;

		return (
			<Form onSubmit={this.handleSubmit}>
		      <FormGroup>
		        <FormControl 
		        	onChange={this.handleChange}
		        	value={this.state.username} 
		        	bsSize="lg" type="text" 
		        	placeholder="Search" />
		      </FormGroup>
		      
	          <Link
	            className={!username ? 'btn btn-success btn-lg disabled' : 'btn btn-success btn-lg'}
	            to={{
	              pathname: match.url + 'stats',
	              search: '?username=' + username
	            }}>
	              Get Weather
	          </Link>
		    </Form>
		);
	}
}

export default PlayerInput;