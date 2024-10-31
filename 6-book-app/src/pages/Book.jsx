import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams();
  
  return <h1>Libro con el ID: {id}</h1>;
}

export default Book;
