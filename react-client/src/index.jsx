import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Groups from './components/Groups.jsx';
import Events from './components/Events.jsx';
import Chat from './components/Chat.jsx';
import Users from './components/Users.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [],
      userId: 2,
      groups: [],
      groupId: null
    }
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
    axios.get('/groups')
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

  render () {
    return (
      <div>
        Current user_id: {this.state.userId}
        <Groups 
          groups={this.state.groups}
          createGroup={this.createGroup}
        />
        <Events/>
        <Chat/>
        <Users
          users={this.state.users}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));