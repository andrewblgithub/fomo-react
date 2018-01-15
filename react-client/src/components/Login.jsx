import React from 'react';
import LoginForm from './LoginForm.jsx';
import LoginCreate from './LoginCreate.jsx';

const Login = (props) => (
  <div>
    <LoginCreate
      createUser={props.createUser}
    />
    <LoginForm
      login={props.login}
    />
  </div>
)

export default Login;