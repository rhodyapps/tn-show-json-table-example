import React, { Component } from 'react'

 import PostList from './posts/PostsList'
// <PostList />

 import StudentList from './students/StudentList'
// <StudentList />

  import RecipesList from './recipes/RecipesList'
// <RecipesList />

import UsdaFoodList from './usdafood/UsdaFoodList'
//<UsdaFoodList />

 import MtPatientsList from './mtpatients/MtPatientsList'
// <MtPatientsList />
// 

import './App.css'



class App extends Component {
  render () {
    return (
      <div className='App'>
        

       <RecipesList />
       <UsdaFoodList />
       <MtPatientsList />

       

      </div>
      
    )
  }
}

export default App
