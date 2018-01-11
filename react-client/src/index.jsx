import React from 'react';
import ReactDOM from 'react-dom';
import Groups from './components/Groups.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      groups: []
    }
  }

  componentDidMount() {
  }

  render () {
    return (<div>
      <h1>Groups</h1>
      <Groups groups={this.state.groups}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));