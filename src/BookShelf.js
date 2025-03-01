import React from 'react'
import './App.css'
import Book from './Book';

class BookShelf extends React.Component {

    render() {

        const {title, filterKey, books, onMove} = this.props;

        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter((book) => (
                        book.shelf === filterKey
                    )).map((book) => (
                        <li key={book.id}>
                            <Book book={book} onMove={onMove}/>
                      </li>
                    ))}
                </ol>
              </div>
        </div>
        )
    }
}

export default BookShelf