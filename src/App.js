import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import Search from './Search';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount(){
      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            books
          }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReads books={this.state.books}/>
        )} />
        <Route path='/search' render={() => (
          <Search books={this.state.books}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
