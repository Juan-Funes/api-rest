import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <div className="container">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">APP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/createNote">Crear Nota</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/createUser">Crear nuevo usuario</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Usuario</NavbarText>
        </Collapse>
      </Navbar>
      </div>
    </div>
  );
}

export default Example;