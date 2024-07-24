import React from 'react';

const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white p-6 m-4">
      <h3 className="font-bold text-xl mb-2">{appointment.title}</h3>
      <p className="text-gray-200 text-base mb-4">{appointment.description}</p>
      <p className="text-gray-200 text-sm">
        {new Date(appointment.start).toLocaleString()}
      </p>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => onEdit(appointment)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(appointment.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;