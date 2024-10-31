import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <>
     <Navbar />
      {/* <Routes>
        <Route path="/" element={<p>contenido extra</p>} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index={true} element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route
            path="new"
            element={
              <h1>Aqui está el formulario para registrar un nuevo libro</h1>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
