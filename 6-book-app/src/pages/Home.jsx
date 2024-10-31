import React from 'react'
import BookListContainer from '../components/BookListContainer'

import BOOKS_DATA from '../booksData'
const homeBooks = BOOKS_DATA.slice(2, 7);
const favoriteBooks = BOOKS_DATA.slice(4, 9);

function Home() {
  return (
    <main>
      <h1>Inicio</h1>
      <BookListContainer bookArr={homeBooks}/>
      <h2>Mis libros favoritos</h2>
      <BookListContainer bookArr={favoriteBooks}/>
    </main>
  )
}

export default Home