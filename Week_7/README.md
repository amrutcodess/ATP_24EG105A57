# Week 7 – MERN Blog Application Capstone Project

Deployment link : https://blogapp-nine-snowy.vercel.app/

## Overview
This week focused on developing a full-stack Blog Application using the MERN stack. The project includes backend APIs, authentication, article management, frontend pages, and cloud storage integration.

---

## Folder Structure

```text
WEEK7/
└── BlogApp/
    ├── Backend-BlogApp/
    │   ├── APIs/
    │   ├── config/
    │   ├── middlewares/
    │   ├── models/
    │   ├── server.js
    │   └── package.json
    ├── Frontend-BlogApp/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── stores/
    │   │   └── styles/
    │   ├── package.json
    │   └── vite.config.js
    └── README.md
```

---

## What I Have Done

- Developed REST APIs using Express.js.
- Built frontend pages using React.
- Implemented authentication and protected routes.
- Added article creation and editing features.
- Integrated MongoDB database operations.
- Configured Cloudinary and Multer for file uploads.

---

# Backend Description

## APIs

### AdminAPI.js
Handles administrator-related operations.

### AuthorAPI.js
Manages author-related operations and article handling.

### CommonAPI.js
Contains shared API functionalities.

### UserAPI.js
Handles user registration and authentication.

---

## Configuration Files

### cloudinary.js
Cloudinary setup configuration.

### cloudinaryUpload.js
Handles Cloudinary image upload integration.

### multer.js
Configures Multer middleware for file uploads.

---

## Middleware

### verifyToken.js
Verifies JWT authentication tokens for protected routes.

---

## Models

### ArticleModel.js
MongoDB schema for blog articles.

### UserModel.js
MongoDB schema for user information.

---

## Core Backend

### server.js
Main backend server configuration and route integration.

---

# Frontend Description

## Authentication Components

### Login.jsx
User login interface.

### Register.jsx
User registration interface.

### ProtectedRoute.jsx
Restricts unauthorized access to protected pages.

### Unauthorized.jsx
Displays unauthorized access messages.

---

## Article Components

### Articles.jsx
Displays all blog articles.

### ArticleByID.jsx
Displays a single article in detail.

### WriteArticles.jsx
Form for creating blog articles.

### EditArticle.jsx
Allows editing existing articles.

### AuthorArticles.jsx
Displays articles written by a specific author.

---

## User and Admin Components

### AdminProfile.jsx
Admin dashboard/profile page.

### AuthorProfile.jsx
Author profile page.

### UserProfile.jsx
Displays user profile information.

### AuthorsList.jsx
Displays all registered authors.

### UserList.jsx
Displays user listings dynamically.

---

## Layout Components

### Header.jsx
Navigation header component.

### Footer.jsx
Footer component.

### RootLayout.jsx
Root layout wrapper for the application.

### Home.jsx
Landing page of the blog application.

---

## State Management

### authStore.js
Handles authentication state management.

---

## Key Learnings

- Learned full-stack MERN application development.
- Practiced authentication and authorization.
- Improved REST API development skills.
- Understood frontend-backend integration.
- Learned file upload handling using Cloudinary and Multer.
