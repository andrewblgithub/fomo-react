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
      users: [],
      userId: 2,
      groups: [],
      groupId: null,
      groupName: ''
    }
    this.mobileViewSwitch = this.mobileViewSwitch.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getGroups = this.getGroups.bind(this);
    this.createGroup = this.createGroup.bind(this);
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
      />
    )
    let EventsComponent = (
      <Events/>
    )
    let ChatComponent = (
      <Chat/>
    )
    let UsersComponent = (
      <div>
        Current user_id: {this.state.userId}
        <Users
          users={this.state.users}
        />
      </div>
    )
    return (
      <Grid>
        <Row className="visible-xs">
          <Col xs={12}>
            <h2 onClick={()=>{this.mobileViewSwitch()}}>
              Groupname &#9660;
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
            <h2>Groupname</h2>
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
            <h2>Groupname</h2>
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