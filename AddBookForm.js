


// import React, { useState } from 'react';
// import axios from 'axios';

// function AddBookForm({ refreshBooks }) {
//   const [courseId, setCourseId] = useState('');
//   const [title, setTitle] = useState('');
//   const [instructor, setInstructor] = useState('');
//   const [department, setDepartment] = useState('');
//   const [credits, setCredits] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (courseId && title && instructor && department && credits) {
//       await axios.post('http://localhost:4000/books', {
//         courseId,
//         title,
//         instructor,
//         department,
//         credits: Number(credits),
//       });
//       refreshBooks();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: '30rem', margin: '0 auto', padding: '1rem' }}>
//       <div style={{ marginBottom: '1rem' }}>
//         <label style={{ display: 'block', color: '#374151' }}>Course ID</label>
//         <input
//           type="text"
//           value={courseId}
//           onChange={(e) => setCourseId(e.target.value)}
//           style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
//           placeholder="Course ID"
//           required
//         />
//       </div>
//       <div style={{ marginBottom: '1rem' }}>
//         <label style={{ display: 'block', color: '#374151' }}>Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
//           placeholder="Title"
//           required
//         />
//       </div>
//       <div style={{ marginBottom: '1rem' }}>
//         <label style={{ display: 'block', color: '#374151' }}>Instructor</label>
//         <input
//           type="text"
//           value={instructor}
//           onChange={(e) => setInstructor(e.target.value)}
//           style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
//           placeholder="Instructor"
//           required
//         />
//       </div>
//       <div style={{ marginBottom: '1rem' }}>
//         <label style={{ display: 'block', color: '#374151' }}>Department</label>
//         <input
//           type="text"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//           style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
//           placeholder="Department"
//           required
//         />
//       </div>
//       <div style={{ marginBottom: '1rem' }}>
//         <label style={{ display: 'block', color: '#374151' }}>Credits</label>
//         <input
//           type="number"
//           value={credits}
//           onChange={(e) => setCredits(e.target.value)}
//           style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
//           placeholder="Credits"
//           required
//         />
//       </div>
//       <button type="submit" style={{ backgroundColor: '#3B82F6', color: '#fff', padding: '0.5rem', borderRadius: '0.375rem' }}>Add Book</button>
//     </form>
//   );
// }

// export default AddBookForm;



import React, { useState } from 'react';
import axios from 'axios';

function AddBookForm({ refreshBooks }) {
  const [courseId, setCourseId] = useState('');
  const [title, setTitle] = useState('');
  const [instructor, setInstructor] = useState('');
  const [department, setDepartment] = useState('');
  const [credits, setCredits] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if courseId already exists
      const response = await axios.get(`http://localhost:4000/books?courseId=${courseId}`);
      if (response.data.length > 0) {
        setError('Course ID already exists. Please enter a different ID.');
        return;
      }
      // If courseId is unique, add the book
      await axios.post('http://localhost:4000/books', {
        courseId,
        title,
        instructor,
        department,
        credits: Number(credits),
      });
      refreshBooks();
      // Clear form fields and error
      setCourseId('');
      setTitle('');
      setInstructor('');
      setDepartment('');
      setCredits('');
      setError('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '30rem', margin: '0 auto', padding: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', color: '#374151' }}>Course ID</label>
        <input
          type="text"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
          placeholder="Course ID"
          required
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', color: '#374151' }}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
          placeholder="Title"
          required
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', color: '#374151' }}>Instructor</label>
        <input
          type="text"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
          placeholder="Instructor"
          required
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', color: '#374151' }}>Department</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
          placeholder="Department"
          required
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', color: '#374151' }}>Credits</label>
        <input
          type="number"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem' }}
          placeholder="Credits"
          required
        />
      </div>
      {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
      <button type="submit" style={{ backgroundColor: '#3B82F6', color: '#fff', padding: '0.5rem', borderRadius: '0.375rem' }}>Add Book</button>
    </form>
  );
}

export default AddBookForm;
