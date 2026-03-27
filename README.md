# 🐞 Bug Tracker Backend

A RESTful backend API for managing bugs with authentication and role-based access.

## 🚀 Features

* User Registration & Login (JWT Authentication)
* Create, Update, Delete Bugs
* Assign Bugs to Users
* Filter Bugs by Status
* Get Bugs Assigned to Logged-in User
* Protected Routes using Middleware

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)

## 📌 API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Bugs

* POST /api/bugs
* GET /api/bugs
* PUT /api/bugs/update/:id
* PUT /api/bugs/assign/:id
* GET /api/bugs/my-bugs
* GET /api/bugs/filter?status=
* DELETE /api/bugs/:id

## ⚙️ Setup

```bash
git clone <repo-link>
cd backend
npm install
node server.js
```
