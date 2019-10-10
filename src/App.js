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

  move = (book, event) => {
    const shelf = event.target.value

    if(book.shelf !== shelf){
      // Update API
      BooksAPI.update(book, shelf)
      .then((message) => {
        console.log('Update Status', message)
      })

      // Update State
      // If book not in shelf, add it
      this.setState(prevState => ({
        books: book.shelf === 'none' ? [...prevState.books, book] : prevState.books
      }))

      // Update shelf
      // TODO: Can we avoid two setState calls?
      this.setState((prevState) => (
        prevState.books.map((b) => (
          b.id === book.id ? b.shelf = shelf : ''
        ))
      ))
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyReads books={this.state.books} onMove={this.move}/>
        )} />
        <Route path='/search' render={() => (
          <Search books={this.state.books} onMove={this.move}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
