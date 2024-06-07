// // // import React from 'react';
// // // import { useState, useEffect } from 'react';
// // // import AddBookForm from './components/AddBookForm';
// // // import BookList from './components/BookList';
// // // import './App.css';

// // // function App() {
// // //   const [books, setBooks] = useState([]);

// // //   useEffect(() => {
// // //     fetchBooks();
// // //   }, []);

// // //   const fetchBooks = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:3002/books');
// // //       if (!response.ok) {
// // //         throw new Error('Network response was not ok');
// // //       }
// // //       const data = await response.json();
// // //       setBooks(data);
// // //     } catch (error) {
// // //       console.error('Error fetching books:', error);
// // //     }
// // //   };

// // //   const addBook = async (book) => {
// // //     try {
// // //       const response = await fetch('http://localhost:3002/books', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(book),
// // //       });
// // //       if (!response.ok) {
// // //         throw new Error('Failed to add book');
// // //       }
// // //       const data = await response.json();
// // //       setBooks([...books, data]);
// // //     } catch (error) {
// // //       console.error('Error adding book:', error);
// // //     }
// // //   };

// // //   const deleteBook = async (id) => {
// // //     try {
// // //       const response = await fetch(`http://localhost:3002/books/${id}`, {
// // //         method: 'DELETE',
// // //       });
// // //       if (!response.ok) {
// // //         throw new Error('Failed to delete book');
// // //       }
// // //       setBooks(books.filter(book => book.id !== id));
// // //     } catch (error) {
// // //       console.error('Error deleting book:', error);
// // //     }
// // //   };

// // //   const editBook = async (updatedBook) => {
// // //     try {
// // //       const response = await fetch(`http://localhost:3002/books/${updatedBook.id}`, {
// // //         method: 'PUT',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(updatedBook),
// // //       });
// // //       if (!response.ok) {
// // //         throw new Error('Failed to update book');
// // //       }
// // //       const updatedBooks = books.map(book =>
// // //         book.id === updatedBook.id ? updatedBook : book
// // //       );
// // //       setBooks(updatedBooks);
// // //     } catch (error) {
// // //       console.error('Error updating book:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="App">
// // //       <h1>Book List Module</h1>
// // //       <AddBookForm addBook={addBook} />
// // //       <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React from 'react';
// // import Books from './Books';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <h1>Book Management System</h1>
// //       </header>
// //       <main>
// //         <Books />
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import AddBookForm from './AddBookForm';
// // import BookList from './BookList';
// // import DeleteConfirmation from './DeleteConfirmation';
// // import EditBookForm from './EditBookForm';
// import AddBookForm from './components/AddBookForm';
// import BookList from './components/BookList';
// import DeleteConfirmation from './components/DeleteConfirmation';
// import EditBookForm from './components/EditBookForm';


// function App() {
//   const [books, setBooks] = useState([]);
//   const [editing, setEditing] = useState(false);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/books');
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAddBook = async (newBook) => {
//     try {
//       await axios.post('http://localhost:4000/books', newBook);
//       fetchData();
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   const handleEditClick = (book) => {
//     setSelectedBook(book);
//     setEditing(true);
//   };

//   const handleEditSubmit = async (editedBook) => {
//     try {
//       await axios.put(`http://localhost:4000/books/${editedBook.id}`, editedBook);
//       fetchData();
//       setEditing(false);
//     } catch (error) {
//       console.error('Error updating book:', error);
//     }
//   };

//   const handleDeleteClick = (bookId) => {
//     setSelectedBook(bookId);
//     setShowDeleteConfirmation(true);
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       await axios.delete(`http://localhost:4000/books/${selectedBook}`);
//       fetchData();
//       setShowDeleteConfirmation(false);
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//   };

//   const handleCancelEdit = () => {
//     setEditing(false);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Book Management System</h1>
//       </header>
//       <main>
//         {editing ? (
//           <EditBookForm
//             book={selectedBook}
//             handleEditSubmit={handleEditSubmit}
//             handleCancel={handleCancelEdit}
//           />
//         ) : (
//           <>
//             <AddBookForm addBook={handleAddBook} />
//             <BookList
//               books={books}
//               handleEditClick={handleEditClick}
//               handleDeleteClick={handleDeleteClick}
//             />
//           </>
//         )}
//         {showDeleteConfirmation && (
//           <DeleteConfirmation
//             handleDelete={handleDeleteConfirm}
//             handleCancel={handleCancelDelete}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddBookForm from './components/AddBookForm';
// import BookList from './components/BookList';
// import DeleteConfirmation from './components/DeleteConfirmation';
// import EditBookForm from './components/EditBookForm';




// function App() {
//   const [books, setBooks] = useState([]);
//   const [editing, setEditing] = useState(false);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/books');
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAddBook = async (newBook) => {
//     try {
//       await axios.post('http://localhost:4000/books', newBook);
//       fetchData();
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   const handleEditClick = (book) => {
//     setSelectedBook(book);
//     setEditing(true);
//   };

//   const handleEditSubmit = async (editedBook) => {
//     try {
//       await axios.put(`http://localhost:4000/books/${editedBook.id}`, editedBook);
//       fetchData();
//       setEditing(false);
//     } catch (error) {
//       console.error('Error updating book:', error);
//     }
//   };

//   const handleDeleteClick = (bookId) => {
//     setSelectedBook(bookId);
//     setShowDeleteConfirmation(true);
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       await axios.delete(`http://localhost:4000/books/${selectedBook}`);
//       fetchData();
//       setShowDeleteConfirmation(false);
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//   };

//   const handleCancelEdit = () => {
//     setEditing(false);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Book Management System</h1>
//       </header>
//       <main>
//         {editing ? (
//           <EditBookForm
//             book={selectedBook}
//             handleEditSubmit={handleEditSubmit}
//             handleCancel={handleCancelEdit}
//           />
//         ) : (
//           <>
//             <AddBookForm addBook={handleAddBook} />
//             <BookList
//               books={books}
//               handleEditClick={handleEditClick}
//               handleDeleteClick={handleDeleteClick}
//             />
//           </>
//         )}
//         {showDeleteConfirmation && (
//           <DeleteConfirmation
//             handleDelete={handleDeleteConfirm}
//             handleCancel={handleCancelDelete}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddBookForm from './components/AddBookForm';
// import BookList from './components/BookList';
// import DeleteConfirmation from './components/DeleteConfirmation';
// import EditBookForm from './components/EditBookForm';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [editingBook, setEditingBook] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/books');
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAddBook = async (newBook) => {
//     try {
//       await axios.post('http://localhost:4000/books', newBook);
//       fetchData();
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   const handleEditClick = (book) => {
//     setEditingBook(book);
//   };

//   const handleDeleteClick = (bookId) => {
//     setShowDeleteConfirmation(true);
//     setEditingBook(null); // Reset editing book when delete confirmation appears
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       await axios.delete(`http://localhost:4000/books/${editingBook.id}`);
//       fetchData();
//       setShowDeleteConfirmation(false);
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Book Management System</h1>
//       </header>
//       <main>
//         <AddBookForm addBook={handleAddBook} />
//         <BookList
//           books={books}
//           handleEditClick={handleEditClick}
//           handleDeleteClick={handleDeleteClick}
//         />
//         {editingBook && (
//           <EditBookForm
//             book={editingBook}
//             refreshBooks={fetchData}
//             setEditingBook={setEditingBook}
//           />
//         )}
//         {showDeleteConfirmation && (
//           <DeleteConfirmation
//             handleDelete={handleDeleteConfirm}
//             handleCancel={handleCancelDelete}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddBookForm from './components/AddBookForm';
// import BookList from './components/BookList';
// import DeleteConfirmation from './components/DeleteConfirmation';
// import EditBookForm from './components/EditBookForm';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [editingBook, setEditingBook] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/books');
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAddBook = async (newBook) => {
//     try {
//       await axios.post('http://localhost:4000/books', newBook);
//       fetchData();
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   const handleEditClick = (book) => {
//     setEditingBook(book);
//   };

//   const handleDeleteClick = (bookId) => {
//     setShowDeleteConfirmation(true);
//     setEditingBook(null); // Reset editing book when delete confirmation appears
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       await axios.delete(`http://localhost:4000/books/${editingBook.id}`);
//       fetchData();
//       setShowDeleteConfirmation(false);
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Book Management System</h1>
//       </header>
//       <main>
//         <AddBookForm addBook={handleAddBook} />
//         <BookList
//           books={books}
//           handleEditClick={handleEditClick}
//           handleDeleteClick={handleDeleteClick}
//         />
//         {editingBook && (
//           <EditBookForm
//             book={editingBook}
//             refreshBooks={fetchData}
//             setEditingBook={setEditingBook}
//           />
//         )}
//         {showDeleteConfirmation && (
//           <DeleteConfirmation
//             handleDelete={handleDeleteConfirm}
//             handleCancel={handleCancelDelete}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddBookForm from './components/AddBookForm';
// import BookList from './components/BookList';
// import DeleteConfirmation from './components/DeleteConfirmation';
// import EditBookForm from './components/EditBookForm';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [editingBook, setEditingBook] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/books');
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAddBook = async (newBook) => {
//     try {
//       await axios.post('http://localhost:4000/books', newBook);
//       fetchData();
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   const handleEditClick = (book) => {
//     setEditingBook(book);
//   };

//   const handleDeleteClick = (bookId) => {
//     setShowDeleteConfirmation(true);
//     setEditingBook(null); // Reset editing book when delete confirmation appears
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       await axios.delete(`http://localhost:4000/books/${editingBook.id}`);
//       fetchData();
//       setShowDeleteConfirmation(false);
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Book Management System</h1>
//       </header>
//       <main>
//         <AddBookForm addBook={handleAddBook} refreshBooks={fetchData} /> {/* Pass refreshBooks to AddBookForm */}
//         <BookList
//           books={books}
//           handleEditClick={handleEditClick}
//           handleDeleteClick={handleDeleteClick}
//         />
//         {editingBook && (
//           <EditBookForm
//             book={editingBook}
//             refreshBooks={fetchData}
//             setEditingBook={setEditingBook}
//           />
//         )}
//         {showDeleteConfirmation && (
//           <DeleteConfirmation
//             handleDelete={handleDeleteConfirm}
//             handleCancel={handleCancelDelete}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddBookForm from './components/AddBookForm';
// import BookList from './components/BookList';
// import DeleteConfirmation from './components/DeleteConfirmation';
// import EditBookForm from './components/EditBookForm';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [editingBook, setEditingBook] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/books');
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAddBook = async (newBook) => {
//     try {
//       await axios.post('http://localhost:4000/books', newBook);
//       fetchData();
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   const handleEditClick = (book) => {
//     setEditingBook(book);
//   };

//   const handleDeleteClick = (bookId) => {
//     setShowDeleteConfirmation(true);
//     setEditingBook(null); // Reset editing book when delete confirmation appears
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       if (editingBook) {
//         await axios.delete(`http://localhost:4000/books/${editingBook.id}`);
//         fetchData();
//         setShowDeleteConfirmation(false);
//       }
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Book Management System</h1>
//       </header>
//       <main>
//         <AddBookForm addBook={handleAddBook} refreshBooks={fetchData} />
//         <BookList
//           books={books}
//           handleEditClick={handleEditClick}
//           handleDeleteClick={handleDeleteClick}
//         />
//         {editingBook && (
//           <EditBookForm
//             book={editingBook}
//             refreshBooks={fetchData}
//             setEditingBook={setEditingBook}
//           />
//         )}
//         {showDeleteConfirmation && (
//           <DeleteConfirmation
//             handleDelete={handleDeleteConfirm}
//             handleCancel={handleCancelDelete}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddBookForm from './components/AddBookForm';
// import BookList from './components/BookList';
// import DeleteConfirmation from './components/DeleteConfirmation';
// import EditBookForm from './components/EditBookForm';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [editingBook, setEditingBook] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [deleteBookId, setDeleteBookId] = useState(null); // New state to store the ID of the book being deleted

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/books');
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAddBook = async (newBook) => {
//     try {
//       await axios.post('http://localhost:4000/books', newBook);
//       fetchData();
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   const handleEditClick = (book) => {
//     setEditingBook(book);
//   };

//   // const handleDeleteClick = (bookId) => {
//   //   setDeleteBookId(bookId); // Set the ID of the book being deleted
//   //   setShowDeleteConfirmation(true);
//   // };

//   // const handleDeleteConfirm = async () => {
//   //   try {
//   //     await axios.delete(`http://localhost:4000/books/${deleteBookId}`); // Use deleteBookId to delete the book
//   //     fetchData();
//   //     setShowDeleteConfirmation(false);
//   //   } catch (error) {
//   //     console.error('Error deleting book:', error);
//   //   }
//   // };

//   const handleDeleteClick = (bookId) => {
//     setDeleteBookId(bookId);
//     setShowDeleteConfirmation(true);
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       if (deleteBookId) {
//         await axios.delete(`http://localhost:4000/books/${deleteBookId}`);
//         fetchData();
//         setShowDeleteConfirmation(false);
//         setDeleteBookId(null); // Reset deleteBookId after successful deletion
//       }
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   // const handleCancelDelete = () => {
//   //   setShowDeleteConfirmation(false);
//   // };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//     setDeleteBookId(null); // Reset deleteBookId when deletion is cancelled
//   };


//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Book Management System</h1>
//       </header>
//       <main>
//         <AddBookForm addBook={handleAddBook} refreshBooks={fetchData} />
//         <BookList
//           books={books}
//           handleEditClick={handleEditClick}
//           handleDeleteClick={handleDeleteClick}
//         />
//         {editingBook && (
//           <EditBookForm
//             book={editingBook}
//             refreshBooks={fetchData}
//             setEditingBook={setEditingBook}
//           />
//         )}
//         {showDeleteConfirmation && (
//           <DeleteConfirmation
//             handleDelete={handleDeleteConfirm}
//             handleCancel={handleCancelDelete}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import DeleteConfirmation from './components/DeleteConfirmation';
import EditBookForm from './components/EditBookForm';
import './App.css'; 

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteBookId, setDeleteBookId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddBook = async (newBook) => {
    try {
      await axios.post('http://localhost:4000/books', newBook);
      fetchData();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleDeleteClick = (bookId) => {
    setDeleteBookId(bookId);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (deleteBookId) {
        await axios.delete(`http://localhost:4000/books/${deleteBookId}`);
        fetchData();
        setShowDeleteConfirmation(false);
        setDeleteBookId(null); // Reset deleteBookId after successful deletion
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setDeleteBookId(null); // Reset deleteBookId when deletion is cancelled
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Management System</h1>
      </header>
      <main>
        <AddBookForm addBook={handleAddBook} refreshBooks={fetchData} />
        <BookList
          books={books}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
        {editingBook && (
          <EditBookForm
            book={editingBook}
            refreshBooks={fetchData}
            setEditingBook={setEditingBook}
          />
        )}
        {showDeleteConfirmation && (
          <DeleteConfirmation
            handleDelete={handleDeleteConfirm}
            handleCancel={handleCancelDelete}
          />
        )}
      </main>
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddBookForm from './components/AddBookForm';
// import BookList from './components/BookList';
// import DeleteConfirmation from './components/DeleteConfirmation';
// import EditBookForm from './components/EditBookForm';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [editingBook, setEditingBook] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [deleteBookId, setDeleteBookId] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/books');
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAddBook = async (newBook) => {
//     try {
//       await axios.post('http://localhost:4000/books', newBook);
//       fetchData();
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   const handleEditClick = (book) => {
//     setEditingBook(book);
//   };

//   const handleDeleteClick = (bookId) => {
//     setDeleteBookId(bookId);
//     setShowDeleteConfirmation(true);
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       if (deleteBookId) {
//         await axios.delete(`http://localhost:4000/books/${deleteBookId}`);
//         fetchData();
//         setShowDeleteConfirmation(false);
//         setDeleteBookId(null); // Reset deleteBookId after successful deletion
//       }
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//     setDeleteBookId(null); // Reset deleteBookId when deletion is cancelled
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-600 text-white py-4">
//         <h1 className="text-center text-3xl font-bold">Book Management System</h1>
//       </header>
//       <main className="max-w-5xl mx-auto p-4">
//         <div className="mb-8">
//           <AddBookForm addBook={handleAddBook} refreshBooks={fetchData} />
//         </div>
//         <div className="mb-8">
//           <BookList
//             books={books}
//             handleEditClick={handleEditClick}
//             handleDeleteClick={handleDeleteClick}
//           />
//         </div>
//         {editingBook && (
//           <div className="mb-8">
//             <EditBookForm
//               book={editingBook}
//               refreshBooks={fetchData}
//               setEditingBook={setEditingBook}
//             />
//           </div>
//         )}
//         {showDeleteConfirmation && (
//           <DeleteConfirmation
//             handleDelete={handleDeleteConfirm}
//             handleCancel={handleCancelDelete}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;

