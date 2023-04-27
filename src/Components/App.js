import "../css/App.css";
import Book from "../Components/Book";

const books = [

 
  {
    img: "https://source.unsplash.com/1600x900/?Book",
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    rating: 4.7,
  },
  { img: "https://source.unsplash.com/1600x900/?Book", author: "F. Scott Fitzgerald", title: "The Great Gatsby", rating: 4.2 },
  { img: "https://source.unsplash.com/1600x900/?book", author: "Harper Lee", title: "To Kill a Mockingbird", rating: 4.5 },
  { img: "https://source.unsplash.com/1600x900/?Book", author: "George Orwell", title: "1984", rating: 4.3 },
  { img: "https://source.unsplash.com/1600x900/?Book", author: "Jane Austen", title: "Pride and Prejudice", rating: 4.4 },
];

function App() {
  return (
    <div className="flex">
      {
        books.map((book)=>{
          return (<Book title= {book.title} author={book.author} img={book.img}  rating={book.rating}/>)
        })
      }

    </div>
  );
}

export default App;
