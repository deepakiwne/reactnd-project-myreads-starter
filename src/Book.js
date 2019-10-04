import React from 'react'
import './App.css'

class Book extends React.Component {

    state = {
      // TODO: Initialized with prop. Is there a better way?
      value: this.props.book.shelf
    }

    change = (event) => {
      this.setState({value: event.target.value})
      this.props.onMove(this.props.book, event)
    }

    render() {

        const book = this.props.book

        return (
        <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, 
                  backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.change}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
        )
    }
}

export default Book