# MERN App - Employee Management

This is a full-stack Employee Management application built using the MERN stack (MongoDB, Express, React, Node.js). It demonstrates RESTful API creation, database integration with Mongoose, and a complete React frontend with routing and state management.

##  Features
- **Full CRUD Operations**: Create, Read, Update, and Delete employee records.
- **Backend API**: A modular Node.js/Express REST API.
- **Database Integration**: Connects to MongoDB Atlas using `mongoose`, complete with schema validation (Name, Email, Mobile, Designation, Company Name).
- **React Frontend**: A Vite-based React application using `react-router-dom` for navigation and `axios` for HTTP requests.
- **Environment Variables**: Secures database URIs and deployed backend URLs using `.env` configurations.
- **Deployment Ready**: Fully configured to be deployed on platforms like Render (Backend) and Vercel (Frontend), handling CORS and dynamic port binding.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, React Hook Form, Axios, React Router.
- **Backend**: Node.js, Express, MongoDB, Mongoose, CORS, Dotenv.

##  Project Structure
```text
mern-app-emps/
├── backend/
│   ├── API/             # Route definitions (empApp.js)
│   ├── models/          # Mongoose schemas (EmpModel.js)
│   ├── server.js        # Main Express application
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/  # React components (CreateEmp, EditEmployee, ListOfEmps)
    │   ├── contexts/    # Context API implementations
    │   ├── App.jsx      # Main application and routing
    │   └── main.jsx
    └── package.json
```

##  Installation & Setup
**Backend:**
1. Navigate to the backend: `cd backend`
2. Install dependencies: `npm install`
3. Set up `.env`: Create a `.env` file containing `DB_URL` (your MongoDB connection string) and `PORT` (e.g., 4000).
4. Run the server: `npm start` or `npm run dev` (if nodemon is configured).

**Frontend:**
1. Navigate to the frontend: `cd frontend`
2. Install dependencies: `npm install`
3. Set up `.env`: Create a `.env` file containing `VITE_API_URL` pointing to your backend URL (e.g., `http://localhost:4000`).
4. Run the React app: `npm run dev`
