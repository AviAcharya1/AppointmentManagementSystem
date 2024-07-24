// utils/storage.js
export const saveAppointment = (appointment) => {
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
  };
  
  export const getAppointments = () => {
    return JSON.parse(localStorage.getItem('appointments') || '[]');
  };
  
  export const updateAppointment = (id, updatedAppointment) => {
    const appointments = getAppointments();
    const index = appointments.findIndex(apt => apt.id === id);
    if (index !== -1) {
      appointments[index] = { ...appointments[index], ...updatedAppointment };
      localStorage.setItem('appointments', JSON.stringify(appointments));
    }
  };