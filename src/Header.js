import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
        <header>
            <img className='logo' src='./Pokeball-PNG-Download-Image.png' />
            <NavLink exact activeClassName="selected" to="/">
                Home
                </NavLink>
            {
                this.props.location.pathname !== '/pokemon' 
                    && <NavLink exact activeClassName="selected" to="/pokemon">
                    Search
                </NavLink>
            }
        </header>
        )
    }
})