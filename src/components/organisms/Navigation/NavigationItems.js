import React, { Component } from 'react'

// import { withRouter } from 'react-router-dom';

import {
	NavItem as NavItem,
	MenuItem as MenuItem
} from 'react-bootstrap'


class NavItemWithoutRouter extends Component {

 constructor(props) {
         super(props);
         this.handleLink = this.handleLink.bind(this);
     }

    handleLink(path) {
        this.props.history.push(path);
    }

    render() {
        const { to, eventKey, children, onSelect } = this.props;
        return (
            <NavItem eventKey={eventKey} onSelect={onSelect} onClick={()=>this.handleLink(to)}>
                {children}
            </NavItem>
        )
    }
}

class MenuItemWithoutRouter extends Component {

 constructor(props) {
         super(props);
         this.handleLink = this.handleLink.bind(this);
     }

    handleLink(path) {
        this.props.history.push(path);
    }

    render() {
        const { to, eventKey, children, onSelect } = this.props;
        return (
            <MenuItem eventKey={eventKey} onSelect={onSelect} onClick={()=>this.handleLink(to)}>
                {children}
            </MenuItem>
        )
    }
}

// const NavItem = withRouter(NavItemWithoutRouter)
// const MenuItem = withRouter(MenuItemWithoutRouter)

export {
	// NavItem,
	// MenuItem,
	NavItemWithoutRouter,
	MenuItemWithoutRouter
}
