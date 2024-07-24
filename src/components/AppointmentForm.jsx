import React, { useState } from 'react';

const AppointmentForm = ({ onSave, onCancel}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    start: '',
    end: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ title: '', description: '', start: '', end: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Create Appointment</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        rows="3"
      ></textarea>
      <input
        type="datetime-local"
        name="start"
        value={formData.start}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        required
      />
      <input
        type="datetime-local"
        name="end"
        value={formData.end}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        required
      />
    <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;