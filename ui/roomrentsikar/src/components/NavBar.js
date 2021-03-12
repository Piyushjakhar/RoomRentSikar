import React, { Component } from 'react'
import { Navbar, Button, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class NavBar extends Component {
    render() {

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">RoomRentSikar</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                    <Nav className="ml-auto px-4 py-3" navbar>

                        <NavItem>
                        <Button className="btn btn-danger"  href="/login" >Login</Button>
                        </NavItem>
                        
                    </Nav>
 
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;
