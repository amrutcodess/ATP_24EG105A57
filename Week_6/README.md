#  Week 6 – MERN Stack Basics & React Forms

Deployment links : https://empapp-frontend.vercel.app/

## Overview
This week focused on advancing frontend skills with React forms and transitioning into full-stack development by introducing the MERN stack (MongoDB, Express, React, Node.js). 

##  Repository Structure

```text
Week_6/
├── react-forms/       # Practice project for managing forms in React
└── mern-app-emps/     # Full-stack MERN Employee Management application
```

##  Projects Breakdown

### 1. React Forms (`/react-forms`)
A dedicated project to master form handling in React. Instead of relying purely on controlled components and standard state, we integrated `react-hook-form` to handle complex form validations seamlessly.
- **Topics Covered**: Form validation, error handling, component state updates, and Tailwind styling for forms.

### 2. Employee Management System (`/mern-app-emps`)
Our first complete MERN stack application. It bridges the gap between a React frontend and an Express/MongoDB backend.
- **Topics Covered**: 
  - Building RESTful APIs with Express.
  - Designing database schemas using Mongoose.
  - Connecting a React frontend to a backend API using Axios.
  - Using `react-router` for navigating between different views (Create, Edit, List).
  - Deploying full-stack applications and handling CORS issues.

##  Key Learnings
- **React Hook Form**: How to write cleaner form code with built-in validation and error reporting.
- **Mongoose ORM**: Creating models, defining schemas, and executing CRUD operations directly on MongoDB from an Express server.
- **Full-Stack Integration**: How to architect an application where a separated frontend and backend communicate securely over HTTP.
- **Deployment**: Understanding environment variables (`process.env` vs `import.meta.env`), CORS configuration, and hosting setups for both React and Express.
