import React, {Component} from 'react';
import './App.css';
import OrgProject from './components/main/OrgProject';

export default class App extends Component {

  constructor() {
    super();
    this.state= {
      data:[]
    }
  }

  componentDidMount() {
    fetch('https://protected-temple-41202.herokuapp.com/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render(){
  return (
    <div className="App">
      <OrgProject />
    </div>
  )};
}
