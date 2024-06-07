// import React from 'react';

// const DeleteConfirmation = ({ deleteBook }) => {
//   const confirmDelete = () => {
//     if (window.confirm('Are you sure you want to delete this book?')) {
//       deleteBook();
//     }
//   };

//   return (
//     <button onClick={confirmDelete}>Delete</button>
//   );
// };

// export default DeleteConfirmation;


// import React from 'react';

// function DeleteConfirmation({ handleDelete, handleCancel }) {
//   return (
//     <div>
//       <p>Are you sure you want to delete this book?</p>
//       <button onClick={handleDelete}>Yes</button>
//       <button onClick={handleCancel}>No</button>
//     </div>
//   );
// }

// export default DeleteConfirmation;



import React from 'react';

const DeleteConfirmation = ({ handleDelete, handleCancel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-xl font-bold mb-4">Delete Confirmation</h2>
      <p className="mb-4">Are you sure you want to delete this book?</p>
      <div className="flex justify-end">
        <button
          onClick={handleCancel}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
