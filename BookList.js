

// import React from 'react';
// import './BookList.css';
// function BookList({ books, handleEditClick, handleDeleteClick }) {
//   return (
//     <div>
//       <h2>Book List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Course ID</th>
//             <th>Title</th>
//             <th>Instructor</th>
//             <th>Department</th>
//             <th>Credits</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map(book => (
//             <tr key={book.id}>
//               <td>{book.courseId}</td>
//               <td>{book.title}</td>
//               <td>{book.instructor}</td>
//               <td>{book.department}</td>
//               <td>{book.credits}</td>
//               <td>
//                 <button onClick={() => handleEditClick(book)}>Edit</button>
//                 <button onClick={() => handleDeleteClick(book.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BookList;




import React from 'react';

function BookList({ books, handleEditClick, handleDeleteClick }) {
  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#374151' }}>Book List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Course ID</th>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Instructor</th>
            <th style={tableHeaderStyle}>Department</th>
            <th style={tableHeaderStyle}>Credits</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td style={tableCellStyle}>{book.courseId}</td>
              <td style={tableCellStyle}>{book.title}</td>
              <td style={tableCellStyle}>{book.instructor}</td>
              <td style={tableCellStyle}>{book.department}</td>
              <td style={tableCellStyle}>{book.credits}</td>
              <td style={{ textAlign: 'center', ...tableCellStyle }}>
                <button style={actionButtonStyle} onClick={() => handleEditClick(book)}>Edit</button>
                <button style={actionButtonStyle} onClick={() => handleDeleteClick(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;

const tableHeaderStyle = {
  backgroundColor: '#6B7280',
  color: '#F3F4F6',
  padding: '10px',
  borderBottom: '2px solid #4B5563',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #D1D5DB',
};

const actionButtonStyle = {
  backgroundColor: '#3B82F6',
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '5px',
};
