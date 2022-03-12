import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
class MailBody extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
  render() {
    return (
      // pass the store into the provider
      
        <div>
           <Row className='navbar'><Col md={1} >Outlook</Col><Col md={11}></Col></Row>
          <Row>
              <Col md={2} className='sidebar'>
          <p className='sidebarcontent'>inbox</p>
          <p className='sidebarcontent'>outbox</p>
          </Col>
          
          <Col md={10}>
          <MailBody {...this.props} />
          </Col>
          
          </Row>
        </div>
    )
  }
}
export default MailBody
 
