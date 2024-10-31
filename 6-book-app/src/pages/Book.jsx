import { Navigate, useParams } from "react-router-dom";
import BOOKS_DATA from "../booksData.js";
import styles from "./Book.module.css";

function Book() {
  const { id } = useParams();
  const bookId = Number(id);
  const selectedBook = BOOKS_DATA.find((book) => book.id === bookId);

  if (!selectedBook) {
    return <Navigate to="*" />;
  }

  return (
    <main className={styles.bookContainer}>
      <div className={styles.content}>
        <h1>{selectedBook.title}</h1>
        <address rel="author">{selectedBook.author}</address>
        <p>{selectedBook.description}</p>
      </div>
      <div className={styles.coverContainer}>
        <img src={selectedBook.cover.imgSrc} alt={selectedBook.cover.alt} />
      </div>
    </main>
  );
}

export default Book;
