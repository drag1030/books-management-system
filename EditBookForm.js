

// import React, { useState } from 'react';
// import axios from 'axios';

// function EditBookForm({ book, refreshBooks, setEditingBook }) {
//   const [editedBook, setEditedBook] = useState(book);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedBook({ ...editedBook, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:4000/books/${editedBook.id}`, editedBook);
//       refreshBooks();
//       setEditingBook(null); // Reset editing state
//     } catch (error) {
//       console.error('Error updating book:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="title" value={editedBook.title} onChange={handleChange} />
//       <input type="text" name="author" value={editedBook.author} onChange={handleChange} />
//       <input type="number" name="pages" value={editedBook.pages} onChange={handleChange} />
//       <button type="submit">Save</button>
//     </form>
//   );
// }

// export default EditBookForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function EditBookForm({ book, refreshBooks, setEditingBook }) {
//   const [editedBook, setEditedBook] = useState({});

//   useEffect(() => {
//     setEditedBook(book);
//   }, [book]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedBook((prevBook) => ({ ...prevBook, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:3001/books/${editedBook.id}`, editedBook);
//       console.log('Book updated successfully');
//       refreshBooks();
//       setEditingBook(null); // Reset editing state
//     } catch (error) {
//       console.error('Error updating book:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="courseId">Course ID:</label>
//         <input
//           type="text"
//           id="courseId"
//           name="courseId"
//           value={editedBook.courseId || ''}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={editedBook.title || ''}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="instructor">Instructor:</label>
//         <input
//           type="text"
//           id="instructor"
//           name="instructor"
//           value={editedBook.instructor || ''}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="department">Department:</label>
//         <input
//           type="text"
//           id="department"
//           name="department"
//           value={editedBook.department || ''}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="credits">Credits:</label>
//         <input
//           type="number"
//           id="credits"
//           name="credits"
//           value={editedBook.credits || ''}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Save</button>
//     </form>
//   );
// }

// export default EditBookForm;




import React, { useState } from 'react';
import axios from 'axios';

function EditBookForm({ book, refreshBooks }) {
  const [editedBook, setEditedBook] = useState({ ...book });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/books/${book.id}`, editedBook);
      refreshBooks();
    } catch (error) {
      console.error('Error editing book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700">Course ID</label>
        <input
          type="text"
          name="courseId"
          value={editedBook.courseId}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Course ID"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={editedBook.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Title"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Instructor</label>
        <input
          type="text"
          name="instructor"
          value={editedBook.instructor}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Instructor"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="department" className="block text-gray-700">Department</label>
        <input
          type="text"
          name="department"
          value={editedBook.department}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Department"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Credits</label>
        <input
          type="number"
          name="credits"
          value={editedBook.credits}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Credits"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Changes</button>
    </form>
  );
}

export default EditBookForm;
