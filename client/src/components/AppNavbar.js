import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState ({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar
                    className="mb-5"
                    color="dark"
                    dark
                    expand="sm"
                >
                    <NavbarBrand
                    className="ml-auto"
                    href="/"
                    >
                    ShoppingList
                    </NavbarBrand>
                    <NavbarToggler
                    className="mr-auto"
                    onClick={this.toggle}
                    />
                    <Collapse isOpen = {this.state.isOpen} navbar>
                    <Nav className = "me-2" navbar>
                        <NavItem>
                        <NavLink href="/components/">
                            Components
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;