import React, { Component } from 'react'

// import PostList from './posts/PostsList'
// import StudentList from './students/StudentList'
// import RecipesList from './recipes/RecipesList'
import CcdList from './ccd/CcdList'
import './App.css'



class App extends Component {
  render () {
    return (
      <div className='App'>
        <CcdList />
      </div>
      
    )
  }
}

export default App
