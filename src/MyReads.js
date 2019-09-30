import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

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
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </div>
        </div>
        )
    }
}

export default MyReads