import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Tabs, Tab, Collapse} from 'react-bootstrap';
import axios from 'axios';
import Groups from './components/Groups.jsx';
import Events from './components/Events.jsx';
import Chat from './components/Chat.jsx';
import Users from './components/Users.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      mobileViewToggle: false,
      // user states
      users: [],
      userId: 2,
      // group states
      groups: [],
      groupId: null,
      groupName: '',
      // event states
      events: [],
    }
    this.mobileViewSwitch = this.mobileViewSwitch.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getGroups = this.getGroups.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.selectGroup = this.selectGroup.bind(this);
  }

  componentDidMount() {
    this.getUsers();
    this.getGroups();
  }

  getUsers() {
    axios.get('/users')
    .then((response)=> {
      this.setState({
        users: response.data
      })
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  getGroups() {
    axios.get('/groups/' + this.state.userId)
      .then((response)=> {
        this.setState({
          groups: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  createGroup(formData) {
    formData.user_id = this.state.userId;
    axios.post('/groups', formData)
    .then((response)=> {
      this.setState({
        groups: response.data
      })
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  selectGroup(name, id) {
    this.setState({
      groupName: name,
      groupId: id
    })
  }

  mobileViewSwitch() {
    this.setState({
      mobileViewToggle: !this.state.mobileViewToggle
    })
  }

  render () {
    let GroupsComponent = (
      <Groups 
      groups={this.state.groups}
      createGroup={this.createGroup}
      selectGroup={this.selectGroup}
      />
    )
    let EventsComponent = (
      <Events
        groups={this.state.events}
      />
    )
    let ChatComponent = (
      <Chat/>
    )
    let UsersComponent = (
      <Users
        users={this.state.users}
      />
    )
    return (
      <Grid>
        <Row className="visible-xs">
          <Col xs={12}>
            <h2 onClick={()=>{this.mobileViewSwitch()}}>
              {this.state.groupName || 'Select a Group'} &#9660;
            </h2>
            <Collapse in={this.state.mobileViewToggle} >
              <div>
                {GroupsComponent}
              </div>
            </Collapse>
            <Collapse in={!this.state.mobileViewToggle}>
              <Tabs defaultActiveKey={2} id="componentTabs">
                <Tab eventKey={1} title="Events">
                  {EventsComponent}
                </Tab>
                <Tab eventKey={2} title="Chat">
                  {ChatComponent}
                </Tab>
                <Tab eventKey={3} title="Users">
                  {UsersComponent}
                </Tab>
              </Tabs>
            </Collapse>
          </Col>
        </Row>
        <Row className="hidden-lg hidden-xs">
          <Col sm={4}>
            <h2>Fomo</h2>
            {GroupsComponent}
          </Col>
          <Col sm={8}>
            <h2>{this.state.groupName || 'Select a Group'}</h2>
            <Tabs defaultActiveKey={2} id="componentTabs">
              <Tab eventKey={1} title="Events">
                {EventsComponent}
              </Tab>
              <Tab eventKey={2} title="Chat">
                {ChatComponent}
              </Tab>
              <Tab eventKey={3} title="Users">
                {UsersComponent}
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Row className="visible-lg">
          <Col lg={4}>
            <h2>Fomo</h2>
            {GroupsComponent}
          </Col>
          <Col lg={4}>
            <h2>{this.state.groupName || 'Select a Group'}</h2>
            {EventsComponent}
            {UsersComponent}
          </Col>
          <Col lg={4}>
            {ChatComponent}
          </Col>
        </Row>
      </Grid>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));