# Employee Management System (EMS)

A React-based web application designed to manage employee tasks and dashboards efficiently. The system features role-based access for Admins and Employees to create, track, and complete tasks.

## 🚀 Features

*   **Role-Based Dashboards**: Separate views for Admin and Employee users.
*   **Task Management**: Create new tasks, accept assignments, and mark tasks as completed or failed.
*   **Authentication**: Secure login system for different user roles.
*   **Real-time Tracking**: Monitor task status (New, Active, Completed, Failed) at a glance.

## 📁 Project Structure

The project follows a modular structure:
*   `src/components/Auth`: Handles login and user authentication.
*   `src/components/Dashboard`: Contains the main Admin and Employee dashboard views.
*   `src/components/TaskList`: Modular components for different task states (Accept, Complete, Failed, New).
*   `src/context`: Managed state and global data across the app.

## 🛠️ Tech Stack

*   **Frontend**: React.js
*   **Styling**: Tailwind CSS (or CSS Modules)
*   **State Management**: React Context API

