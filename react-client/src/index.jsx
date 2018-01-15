import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Tabs, Tab, Collapse} from 'react-bootstrap';
import axios from 'axios';
import Groups from './components/Groups.jsx';
import Events from './components/Events.jsx';
import Chat from './components/Chat.jsx';
import Users from './components/Users.jsx';
import Login from './components/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      mobileViewToggle: true,
      // user states
      logginIn: false,
      user: {id: 2},
      users: [],
      otherUsers: [],
      // group states
      group: {},
      groups: [],
      // groupId: null,
      // group.name: '',
      // event states
      events: [],
      // messages handled in chat.jsx
    }
    this.mobileViewSwitch = this.mobileViewSwitch.bind(this);
    this.login = this.login.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.findUsers = this.findUsers.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getGroups = this.getGroups.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.selectGroup = this.selectGroup.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    this.getGroups();
  }

  login(formData) {
    axios.post('/users/login', formData)
      .then((response)=> {
        this.setState({
          user: response.data,
          logginIn: true
        })
      })
      .catch((error)=> {
        console.log(error);
      })
  }

  createUser(formData) {
    axios.post('/users', formData)
      .then(()=> {
        this.logIn({
          email: formData.email,
          password: formData.password
        })
      })
      .catch((error)=> {
        console.log(error);
      })
  }

  getUsers() {
    axios.post('/users/' + this.state.group.id)
      .then((response)=> {
        this.setState({
          users: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  findUsers() {
    axios.get('/users')
      .then((response)=> {
        this.setState({
          otherUsers: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  // until invite is implemented, directly add users from user list
  addUser(user) {
    axios.post('/members', {
      user_id: user.id,
      group_id: this.state.group.id
    }).then(()=> {
      this.getUsers();
    })
  }

  getGroups() {
    axios.get('/groups/' + this.state.user.id)
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
    formData.user_id = this.state.user.id;
    axios.post('/groups', formData)
      .then(()=> {
        this.getGroups();
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  selectGroup(selectedGroup) {
    this.setState({
      group: selectedGroup,
      mobileViewToggle: !this.state.mobileViewToggle
    }, ()=> {
      // get events and users once group is selected
      this.getUsers();
      this.getEvents();
    })
  }

  createEvent(formData) {
    formData.group_id = this.state.group.id;
    formData.user_id = this.state.user.id;
    console.log('ok')
    axios.post('/events', formData)
    .then(()=> {
      this.getEvents();
    })
    .catch((error)=> {
      console.log(error);
    });
  }
  
  getEvents() {
    axios.get('/events/' + this.state.group.id)
      .then((response)=> {
        this.setState({
          events: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  mobileViewSwitch() {
    this.setState({
      mobileViewToggle: !this.state.mobileViewToggle
    })
  }

  render () {
    let LoginComponent = (
      <Login
        login={this.login}
        createUser={this.createUser}
      />
    )
    let GroupsComponent = (
      <Groups 
      groups={this.state.groups}
      createGroup={this.createGroup}
      selectGroup={this.selectGroup}
      />
    )
    let EventsComponent = (
      <Events
        events={this.state.events}
        createEvent={this.createEvent}
      />
    )
    let ChatComponent = (
      <Chat
        userId={this.state.user.id}
        groupId={this.state.group.id}
      />
    )
    let UsersComponent = (
      <Users
        users={this.state.users}
        otherUsers={this.state.otherUsers}
        findUsers={this.findUsers}
        addUser={this.addUser}
      />
    )
    if (this.state.logginIn) {
      return (
        <Grid>
          <Row className="visible-xs">
            <Col xs={12}>
              <h2 onClick={()=>{this.mobileViewSwitch()}}>
                {this.state.group.name || 'Select a Group'} &#9660;
              </h2>
              <Collapse in={this.state.mobileViewToggle} >
                <div>
                  {GroupsComponent}
                </div>
              </Collapse>
              <Collapse in={!this.state.mobileViewToggle}>
                <Tabs defaultActiveKey={2} id="componentTabs">
                  <Tab eventKey={1} title="Events">
                    <br/>
                    {EventsComponent}
                  </Tab>
                  <Tab eventKey={2} title="Chat">
                    {ChatComponent}
                  </Tab>
                  <Tab eventKey={3} title="Users">
                    <br/>
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
              <h2>{this.state.group.name || 'Select a Group'}</h2>
              <Tabs defaultActiveKey={1} id="componentTabs">
                <Tab eventKey={1} title="Events">
                  <br/>
                  {EventsComponent}
                </Tab>
                <Tab eventKey={2} title="Chat">
                  {ChatComponent}
                </Tab>
                <Tab eventKey={3} title="Users">
                  <br/>
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
              <h2>{this.state.group.name || 'Select a Group'}</h2>
              {EventsComponent}
              {UsersComponent}
            </Col>
            <Col lg={4}>
              {ChatComponent}
            </Col>
          </Row>
        </Grid>
      )
    } else {
      return (
        <div>
          {LoginComponent}
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));