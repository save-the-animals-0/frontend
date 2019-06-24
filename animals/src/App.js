import React from 'react';
import dummyData from './dummy-data'
import './App.css';
// import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer';

class App extends React.Component {
  state = {
    data: [],
    filteredPosts: []
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNewComment = e => {
    e.preventDefault();
  }

  componentDidMount(){
    this.setState({data: dummyData})
  }

  searchFilter = e => {
    const filtered = this.state.data.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase()))
  }

  render() {
    console.log('render0', this.state.data);
    return(
      <div className='App'>
        {/* <SearchBar
          newSearch={this.state.search}
          searchFilter={this.searchFilter}
        /> */}

        <PostContainer data={this.state.data} filteredPosts={this.state.filteredPosts} searchFilter={this.searchFilter} />
      </div>
    );

  }
}

export default App;