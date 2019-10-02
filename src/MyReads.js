import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MyReads extends React.Component {

    render() {
        
        const books = this.props.books

        console.log('books', books)

        return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
                <BookShelf title="Currently Reading" filterKey='currentlyReading' books={books} />
                <BookShelf title="Want To Read" filterKey='wantToRead' books={books} />
                <BookShelf title="Read" filterKey='read' books={books} />
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