import BOOKS_DATA from '../booksData.js'
import BookListContainer from '../components/BookListContainer.jsx'

function BookList() {
  return (
    <main>
      <h1>Lista de Libros</h1>
      <BookListContainer bookArr={BOOKS_DATA}/>
      {/* <div className={styles.}>
        {BOOKS_DATA.map((book)=> (
          <Link to={`/books/${book.id}`}>
            <img src={book.cover.imgSrc} alt={book.cover.alt} />
          </Link>
        ))}
      </div> */}
    </main>
  )
}

export default BookList
