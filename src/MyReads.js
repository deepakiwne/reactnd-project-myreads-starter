import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MyReads extends React.Component {
    
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
        console.log('books', this.state.books)
        return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
                <BookShelf title="Currently Reading" filterKey='currentlyReading' books={this.state.books} />
                <BookShelf title="Want To Read" filterKey='wantToRead' books={this.state.books} />
                <BookShelf title="Read" filterKey='read' books={this.state.books} />
            </div>
          </div>
          <div className="open-search">
              <Link
                to='/search'
                className='button'>
                  Add a book
              </Link>
          </div>
        </div>
        )
    }
}

export default MyReads