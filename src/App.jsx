import React, { useState, useEffect } from 'react';
import MyCalendar from './components/MyCalender';
import AppointmentForm from './components/AppointmentForm';
import Navbar from './components/NavBar';
import AppointmentCard from './components/AppointmentCard';
import { getAppointments, saveAppointment } from './utils/storage';
import { scheduleNotification } from './utils/notifications';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [view, setView] = useState('calendar'); // 'calendar', 'cards', 'list'
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setAppointments(getAppointments());
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAddAppointment = (newAppointment) => {
    const appointmentWithId = { ...newAppointment, id: Date.now().toString() };
    saveAppointment(appointmentWithId);
    setAppointments([...appointments, appointmentWithId]);
    scheduleNotification(appointmentWithId);
    setShowForm(false);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const renderView = () => {
    switch(view) {
      case 'calendar':
        return (
          <MyCalendar
            events={appointments}
            onSelectSlot={(slotInfo) => console.log(slotInfo)}
          />
        );
      case 'cards':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        );
      case 'list':
        return (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {appointments.map(appointment => (
              <li key={appointment.id} className="py-4">
                <p className="font-bold">{appointment.title}</p>
                <p>{new Date(appointment.start).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar 
        setView={setView} 
        openForm={() => setShowForm(true)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderView()}
      </main>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <AppointmentForm 
              onSave={handleAddAppointment} 
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;