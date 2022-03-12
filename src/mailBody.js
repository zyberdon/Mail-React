import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import {folders } from  '../inbox'
class MailBody extends React.Component {
    constructor(props){
        super(props);
        this.state={
          mailbody:''
        };
        
    }

    view=(e,ele)=>{
      e.preventDefault()
      this.props.markAsRead(ele)
this.setState({mailbody: ele.content})
    }
    delete=(e,ele)=>{
      e.preventDefault()
      this.props.delete(ele)
    }
    flag=(e,ele)=>{
      e.preventDefault()
      this.props.flag(ele)
    }
    
componentDidUpdate=(prevProps, prevState) =>{
  if(prevProps.activeFolder!==this.props.activeFolder)
  this.setState({mailbody: ''})
 } 
  render() {
    return (
      // pass the store into the provider
      
        <div className='section'>
           <h1 className='content'>
           {this.props.content.map(ele=>{
              return <div key={ele.subject}><span onClick={e=>this.view(e, ele)}>{ele.subject}</span>
              <span style={{fontSize: '14px'}}> {(ele.flag? '...flagged!' : '')}</span>
              <span style={{float: 'right'}}>
              {this.props.activeFolder!=='deleted'&&<button key={ele.id} onClick={(e)=>this.delete(e,ele)}>delete {ele.subject}</button>}
              {!ele.flag&&<button onClick={(e)=>this.flag(e,ele)}>flag! {ele.subject}</button>}
              </span>
              </div>
           })}
           
           </h1>
           <p className='mailbody'>
{this.state.mailbody}</p>
        </div>
    )
  }
}
export default MailBody
 
