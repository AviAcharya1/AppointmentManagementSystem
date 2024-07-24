# Appointment Management System

## Overview

The Appointment Management System is a React-based web application that allows users to efficiently manage their appointments. It features a user-friendly interface with multiple views, easy appointment creation and management, and a dark/light mode toggle for enhanced user experience.

## Features

- Multiple views: Calendar, Cards, and List
- Interactive calendar view (month, week, day, agenda)
- Create, read, update, and delete appointments
- Dark/light mode toggle
- Local storage for data persistence
- Notification system for upcoming appointments
- Responsive design
- Modal-based appointment creation

## Technologies Used

- React.js
- Vite (for project setup)
- Tailwind CSS (for styling)
- react-big-calendar (for calendar component)
- localStorage API (for data persistence)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/AviAcharya1/AppointmentManagementSystem.git
   ```

2. Navigate to the project directory:
   ```
   cd appointment-management-system
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Usage

1. **View Appointments**: Choose between Calendar, Cards, or List view using the navigation bar.
2. **Create Appointment**: Click the "Create Appointment" button in the navigation bar to open the appointment form modal.
3. **Edit/Delete Appointment**: (Functionality to be implemented) Click on an existing appointment to edit or delete it.
4. **Toggle Theme**: Use the theme toggle button in the navigation bar to switch between light and dark modes.

## Project Structure

```
appointment-management-system/
│
├── src/
│   ├── components/
│   │   ├── MyCalendar.jsx
│   │   ├── AppointmentForm.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── Navbar.jsx
│   │   └── AppointmentCard.jsx
│   │
│   ├── utils/
│   │   ├── storage.js
│   │   └── notifications.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please ensure your code adheres to the existing style and passes all tests.

## Future Enhancements

- Implement edit and delete functionality for appointments
- Add user authentication
- Implement recurring appointment options
- Integrate with external calendars (Google Calendar, iCal)
- Add drag-and-drop functionality for appointments in calendar view
- Implement search and filter options for appointments
- Add data visualization for appointment statistics

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- React Big Calendar for the calendar component
- Tailwind CSS for the utility-first CSS framework
- The React community for continuous inspiration and support

## Contact

Your Name - aviacharyasr@gmail.com

Project Link: [https://github.com/AviAcharya1/AppointmentManagementSystem.git](https://github.com/AviAcharya1/AppointmentManagementSystem.git)

