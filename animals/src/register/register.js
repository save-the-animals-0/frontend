import React from "react";
import reactDom from "react-dom";
import axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {username: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
    }

  handleChange(event) {
    this.setState({username: event.target.value});
  }
  handlePassword(event) {
      this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  submitRegister(event) {
    axios
   .post('api/login')
   .then(res => console.log(res))
   .catch(err => console.log(err))


}


    render(){
        return(
        <div>
            <h1>Login</h1>
        <form>
            <input
            type="text" name="email" value={this.state.email} onChange={this.handleEmail}
            />
            <input
            type="text" name="username" value={this.state.username} onChange={this.handleChange}
            />
            <input
            type="text" name="password" value={this.state.password} onChange={this.handlePassword} />
        </form>
        <button onClick={this.submitRegister}>Enter</button>
        </div>
        )
    }

}

export default Login;