import React from 'react';
import './App.css';
import NavbarOutlook from './navbar'
import Sidebar from "react-sidebar";
import { Row, Col } from 'reactstrap';
import MailBody from './mailBody';
import {folders } from  '../inbox'

class Outlook extends React.Component {
    constructor(props){
        super(props);
        this.state={
          activeFolder: 'inbox',
            folders: ['inbox','sent','junk','drafts','deleted'],
            mail: folders
        }
    }

    changefolders=(e, folder)=>{
      this.setState({activeFolder : folder})
    }
    calcUnread=(element)=>{
      let unread =0
      if(this.state.mail[element])
      this.state.mail[element].forEach(ele=>{
        ele.unread && unread++
      })
      return unread
    }
    markAsRead=(ele)=>{
      let newEmails= this.state.mail;
      let id = ele.mId
      newEmails[this.state.activeFolder].map(e=>{
        if(e.mId===id)
          e.unread = false
        return e
      })
      console.log(newEmails)
      this.setState({mail: newEmails})
    }

    delete=(ele)=>{
      let newEmails= this.state.mail;
      let x= [];
       newEmails[this.state.activeFolder].forEach(e=>{
        if(e.mId!==ele.mId)
            x.push(e)
        else 
            newEmails.deleted.push(e)
      })

      newEmails[this.state.activeFolder] = x
      this.setState({mail: newEmails})
    }
flag=(ele)=>{
  let newEmails= this.state.mail;
  let x= [];
   newEmails[this.state.activeFolder].map(e=>{
     if(e.mId===ele.mId)
    e.flag=true
  })
  this.setState({mail: newEmails})
}
  render() {
    return (
      // pass the store into the provider
      
        <div>
           <Row className='navbar'><Col md={1} >Outlook</Col><Col md={11}></Col></Row>
              <Row className='container'><Col md={2} className='sidebar' style={{'width': '10%'}}>
              {
    Object.keys(this.state.mail).map(ele=>{
      let unread=this.calcUnread(ele)
      
        return<p key={ele} className='sidebarcontent' onClick={(event)=> this.changefolders(event,ele)}>{ele + unread}</p>
    })
              }
          </Col>
          
          <Col md={10}>
          <MailBody {...this.props} content ={this.state.mail[this.state.activeFolder]} markAsRead={this.markAsRead} activeFolder={this.state.activeFolder} delete={this.delete} flag={this.flag}/>
          </Col></Row>
        </div>
    )
  }
}
export default Outlook
 