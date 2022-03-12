import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
Col, Row } from 'reactstrap';
// import {FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core'
export default class NavbarOutlook extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Row className='navBar'>
            <Col md={1}>Outlook</Col><Col md={11}></Col>
        </Row>
      </div>
    );
  }
}