import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import Search from './Search';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={MyReads} />
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
