# CN5006 – Tutorial 9: React Employee Management System

## Project Overview

This project was developed as part of the CN5006 Web and Mobile Development module at the University of East London.

The objective of this portfolio task was to implement a React functional component that retrieves and displays the total number of employees stored in a MongoDB database using a REST API.

The application demonstrates communication between a React frontend and an Express.js backend, with MongoDB providing persistent data storage.

## Technologies Used

- React
- JavaScript (ES6+)
- JSX
- Node.js
- Express.js
- MongoDB
- Mongoose
- Vite
- HTML and CSS
- Git and GitHub
- Visual Studio Code

## Project Structure

The application is organised into two main directories.

**Backend (`backend/`)**

Contains the Express.js server, MongoDB connection, Mongoose Employee model and employee-count REST API endpoint.

**Frontend (`frontend/`)**

Contains the React application, including the reusable `EmployeeCount.jsx` component and `App.jsx`, which displays the employee count.

## API Functionality

The backend implements the following endpoint:

`GET /api/employees/count`

This endpoint uses Mongoose's `countDocuments()` method to count employee documents stored in MongoDB.

Example JSON response:

```json
{
  "success": true,
  "totalEmployees": 0
}
```

The endpoint includes error handling and returns an HTTP 500 response if the database query fails.

## React Component Functionality

The `EmployeeCount.jsx` component uses two React Hooks:

**useState**

Stores the employee count and any error message returned during data retrieval.

**useEffect**

Initiates an asynchronous HTTP GET request when the component mounts.

The component uses the JavaScript Fetch API to retrieve employee data from the Express backend.

Conditional rendering displays a loading message, an error message or the total number of employees.

## Testing and Results

The backend was successfully started on port 3000 and connected to MongoDB.

The employee-count REST API returned a successful JSON response with a total of zero employees, reflecting the empty database collection.

The React frontend was tested using Vite at `http://localhost:5173/` and successfully displayed:

**Total Employees: 0**

Testing confirmed that the frontend could retrieve and display data from the backend REST API.

## Running the Application

### Backend

1. Navigate to the `backend` directory.
2. Run `npm install`.
3. Ensure MongoDB is running locally.
4. Run `node server.js`.
5. The backend will be accessible at `http://127.0.0.1:3000/`.

### Frontend

1. Navigate to the `frontend` directory.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL displayed by Vite, normally `http://localhost:5173/`.

Both servers must be running for the application to retrieve the employee count.

## Learning Outcomes

This tutorial improved my understanding of full-stack web development and communication between frontend and backend applications.

I gained practical experience developing REST API endpoints, retrieving data asynchronously using the Fetch API, managing React component state and displaying database information using JSX.

The exercise also reinforced my understanding of MongoDB, Mongoose, Express.js and React Hooks.
