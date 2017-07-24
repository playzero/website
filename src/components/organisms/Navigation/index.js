import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
	withRouter,
	Link
} from 'react-router-dom';

import {
	// NavItem,
	// MenuItem
	NavItemWithoutRouter,
	MenuItemWithoutRouter,
} from './NavigationItems'

const NavItem = withRouter(NavItemWithoutRouter)
const MenuItem = withRouter(MenuItemWithoutRouter)

import {
	Nav,
	Navbar,
	NavDropdown
} from 'react-bootstrap'

export default class Navigation extends Component {

	render() {

		const NavTree = () => {
			return (
				<Navbar fixedTop inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to={'/'}>ZERØ</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} to={'/pitch'}>Project</NavItem>
							<NavItem eventKey={2} to={'/play'}>Games</NavItem>
							<NavItem eventKey={3}></NavItem>
							<NavItem eventKey={4} to={'/idea'}>Whitepaper</NavItem>
							<NavItem eventKey={5} to={'/about'}>About us</NavItem>
							<NavItem eventKey={6}></NavItem>
							<NavItem eventKey={7} to={'/dashboard'}>Dashboard</NavItem>
						</Nav>
						<Nav pullRight>
							<NavDropdown eventKey={1} title='Developer' id='basic-nav-dropdown'>
								<MenuItem eventKey={1.1} to={'/dev'}>Introduction</MenuItem>
								<MenuItem eventKey={1.2} to={'/dev#tutorials'}>Examples + Tutorials</MenuItem>
								<MenuItem eventKey={1.3} to={'/dev#sdk'}>SDK + Downloads</MenuItem>
								<MenuItem eventKey={1.4} to={'/dev#api'}>API Reference</MenuItem>
							</NavDropdown>
							<NavItem eventKey={2} to={'/apply'}>Apply for beta</NavItem>
							<NavItem eventKey={3} to={'/login'}>Login</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
		}

		return (
			<div className="header">
				<NavTree />
			</div>
		)
	}
}

Navigation.propTypes = {
	children: PropTypes.element
}

