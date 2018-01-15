import React from 'react';
import LoginForm from './LoginForm.jsx';
import LoginCreate from './LoginCreate.jsx';

const Login = (props) => (
  <div>
    <LoginForm
      login={props.login}
    />
    <LoginCreate
      createUser={props.createUser}
    />
  </div>
)

export default Login;