import React, { Component } from 'react'

// import PostList from './posts/PostsList'
// <PostList />

// import StudentList from './students/StudentList'
// <StudentList />

 import RecipesList from './recipes/RecipesList'
//<RecipesList />

 // import MtPatientsList from './mtpatients/MtPatientsList'
// <MtPatientsList />
// 

import './App.css'



class App extends Component {
  render () {
    return (
      <div className='App'>
        <RecipesList />
      </div>
      
    )
  }
}

export default App
