

export const SecondComponent = () => {

  const books = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la camara secreta",
    "Harry Potter y el prisionero de Azkaban",
    "Harry Potter y el caliz de fuego",
    "Harry Potter y la orden del fenix",
    "Harry Potter y el misterio del principe",
    "Harry Potter y las reliquias de la muerte",
    "Animales fantasticos y donde encontrarlos",
    "Habitos"
  ];

 

  return (
   <>
   <h1>Second component</h1>
   <div>
    <ul>
      {books.length > 1 ? (
        books.map((book, index) => {
          return <li key={index}>{book}</li>
        })
      ) : (
        <p>No existen libros</p>
      )}
    </ul>
   </div>
   </>
  )
}
