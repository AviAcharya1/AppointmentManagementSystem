// utils/notifications.js
export const scheduleNotification = (appointment) => {
    const now = new Date();
    const appointmentDate = new Date(appointment.start);
    const daysBefore = 3; // Notify 3 days before the appointment
  
    const notificationDate = new Date(appointmentDate.getTime() - (daysBefore * 24 * 60 * 60 * 1000));
  
    if (notificationDate > now) {
      const timeUntilNotification = notificationDate.getTime() - now.getTime();
  
      setTimeout(() => {
        if (Notification.permission === "granted") {
          new Notification(`Upcoming Appointment: ${appointment.title}`, {
            body: `Your appointment is in ${daysBefore} days.`,
          });
        } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(permission => {
            if (permission === "granted") {
              new Notification(`Upcoming Appointment: ${appointment.title}`, {
                body: `Your appointment is in ${daysBefore} days.`,
              });
            }
          });
        }
      }, timeUntilNotification);
    }
  };