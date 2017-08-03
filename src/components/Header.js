import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileToggle: false,
      searchToggle: false,
      username: ''
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");

    function add_class_on_scroll() {
        header.classList.add("nav-up");
    }

    function remove_class_on_scroll() {
        header.classList.remove("nav-up");
    }

    window.addEventListener('scroll', function(){ 
        //Here you forgot to update the value
        scrollpos = window.scrollY;

        if(scrollpos > 10){
            add_class_on_scroll();
        }
        else {
            remove_class_on_scroll();
        }
    });
  }

  componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  }

  handleClickOutside(event) {
      const domNode = ReactDOM.findDOMNode(this);

      if ((!domNode || !domNode.contains(event.target))) {
          this.setState({
              profileToggle: false,
              searchToggle: false
          });
      }
  }

  handleChange = (event) => {
    var value = event.target.value;
    this.setState({
      username: value
    })
  }

  handleSubmit = (event) => {
   event.preventDefault();
      this.props.onSubmit(
        this.state.username
      );
      this.setState({
        username: ''
      });
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log("yes");
      this.props.onSubmit(
        this.state.username
      );
    }
  }

  handleProfile = () => {
    this.setState(prevState => ({
      profileToggle: !prevState.profileToggle
    }));
  }

  handleSearch = () => {
    this.setState(prevState => ({
      searchToggle: true
    }));
  }

  render() {

    return (
      <header id="header" className='header at-top'>
        <div className='top-bar'>
          <div className='branding'>
            <div className='logo'>
              <Link to='/'><img alt='' src={require('../assets/pubg.png')}/></Link>
            </div>
          </div>
          <div onClick={this.handleSearch} className={!this.state.searchToggle ? 'search' : 'search has-query opened'}>
            <div className='search-box'>
              <div className='search-icon'>  
                <FontAwesome
                  name='search'
                  style={!this.state.searchToggle ? { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' } : { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#000' }}
                />
              </div>
              <form onSubmit={this.handleSubmit}>
                <input 
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                  className='search-field' 
                  type='text' 
                  placeholder='Search'
                  value={this.state.username}
                />
              </form>
            </div>
          </div>
          <div className='tools'>
            <div className={!this.state.profileToggle ? 'tools-menu profile-menu has-submenu' : 'tools-menu profile-menu has-submenu opened'}>
              <a onClick={this.handleProfile} href='#'>
                <FontAwesome
                  name='user'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingRight: '10px', fontSize: '20px' }}
                />
                <span className='text'>Login Coming Soon</span>
              </a>
              <div className='submenu'>
                <a className="profile-info" href="#">
                    <div className="avatar-image">
                      <FontAwesome
                        name='user'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', paddingRight: '10px', fontSize: '20px' }}
                      />
                    </div>
                    <div className="data">
                        <span className="name">username</span>
                    </div>
                </a>
                <ul>
                  <li className="seperator"></li>
                  <li>
                      <a href="#">
                          Logout
                      </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

