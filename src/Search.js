import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends React.Component {

    state = {
      searcResultBooks: [],
      userInput: ''
    }

    handleUserTyping = event => {
      this.setState({ userInput: event.target.value }, this.onSearch)
    }

    onSearch = () => {

      BooksAPI.search(this.state.userInput)
      .then((searcResultBooks) => {

        // Cleanup search results before changing state
        this.cleanUp(searcResultBooks)

        this.setState(() => ({
          searcResultBooks
        }))
      })
      .catch((err) => {
        console.log("Search Error", err)

        // On error clear search result
        this.setState({
          searcResultBooks: []
        })
      })
    }

    cleanUp = (books) => {
      // Add shelf field
      books.map((rb) => (
        rb.shelf = 'none'
      ))

      books.map((rb) => (
        this.props.books.map((sb) => (
          rb.id === sb.id ? rb.shelf = sb.shelf : ''
        ))
      ))
    }

    render() {

      console.log('Passed Books', this.props.books)

      const onMove = this.props.onMove

        return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link
                to='/'
                className='close-search'>
                  Close
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <form>
                  <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.userInput}
                    onChange={this.handleUserTyping}/>
                </form>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searcResultBooks.map((book) => (
                  <li key={book.id}><Book book={book} onMove={onMove}/></li>
                ))}
              </ol>
            </div>
        </div>
        )
    }
}

export default Search