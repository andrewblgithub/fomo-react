import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
  }
  componentDidMount() {
    this.getTimeRemaining(this.props.event.start_time)
    const timerFunc = setInterval(()=> {
      this.getTimeRemaining(this.props.event.start_time)
    }, 1000)
    // save interval so it can be cleared when component unmounts
    this.setState({
      timerFunc: timerFunc
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.timerFunc)
  }
  getTimeRemaining(time){
    let t = Date.parse(time) - Date.parse(new Date());
    let seconds = Math.floor( (t/1000) % 60 );
    let minutes = Math.floor( (t/1000/60) % 60 );
    let hours = Math.floor( (t/(1000*60*60)) % 24 );
    let days = Math.floor( t/(1000*60*60*24) );
    this.setState({
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }
  render() {
    return (
      <ListGroupItem
        onClick={()=> {
    
        }}
        style={{pointer: 'cursor'}}
      >
        { this.state.days } days
        { this.state.hours } hours
        { this.state.minutes } minutes
        { this.state.seconds } seconds
        <br/>
        { this.props.event.title }
        <br/>
        { this.props.event.description }
      </ListGroupItem>
    )
  }
}

export default Event;