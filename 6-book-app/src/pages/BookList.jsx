import { Link } from 'react-router-dom'
import BOOKS_DATA from '../booksData.js'
import styles from "./BookList.module.css"


function BookList() {
  return (
    <main>
      <h1>Lista de Libros</h1>
      <div className={styles.bookListContainer}>
        {BOOKS_DATA.map((book)=> (
          <Link>
            <img src={book.cover.imgSrc} alt={book.cover.alt} />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default BookList
