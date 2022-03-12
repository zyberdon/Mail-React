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
           <h4 className='content'>
           {this.props.content.map(ele=>{
              return <ul key={ele.subject}><span onClick={e=>this.view(e, ele)} style={{cursor: 'pointer', }}>{ele.subject}</span>
              <span style={{fontSize: '14px'}}> {(ele.flag? '...flagged!' : '')}</span>
              <span style={{float: 'right'}}>
              {this.props.activeFolder!=='deleted'&&<button key={ele.id} onClick={(e)=>this.delete(e,ele)}>Delete</button>}
              {!ele.flag&&<button onClick={(e)=>this.flag(e,ele)}>Flag!</button>}
              </span>
              </ul>
           })}
           
           </h4>
           <p className='mailbody'>
{this.state.mailbody}</p>
        </div>
    )
  }
}
export default MailBody
 
