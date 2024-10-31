import React from "react";
import { Link } from "react-router-dom";
import styles from './BookList.module.css'

function BookListContainer({bookArr}) {
  return (
    <div className={styles.bookListContainer}>
      {bookArr.map((book) => (
        <Link key={book.id} to={`/books/${book.id}`}>
          <img src={book.cover.imgSrc} alt={book.cover.alt} />
        </Link>
      ))}
    </div>
  );
}

export default BookListContainer;
