import React from 'react';
import './App.css';
import NavbarOutlook from './navbar'
import Sidebar from "react-sidebar";
import { Row, Col } from 'reactstrap';
import MailBody from './mailBody';

class Outlook extends React.Component {
    constructor(props){
        super(props);
        this.state={
            folders: ['inbox','sent','junk email','drafts','deleted']
        }
    }
  render() {
    return (
      // pass the store into the provider
      
        <div>
           <Row className='navbar'><Col md={1} >Outlook</Col><Col md={11}></Col></Row>
          <Row>
              <Col md={2} className='sidebar'>
              {
    this.state.folders.map(ele=>{
        return<p key={ele} className='sidebarcontent' onClick={(event)=> this.changefolders(event,ele)}>{ele}</p>
    })
              }
          </Col>
          
          <Col md={10}>
          <MailBody {...this.props} />
          </Col>
           
          </Row>
        </div>
    )
  }
}
export default Outlook
 