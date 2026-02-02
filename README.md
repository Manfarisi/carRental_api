# ⚙️ Car Rental Backend (Node.js & Express)

Backend service for the **Car Rental application**, built using  
**Node.js, Express.js, and MongoDB**.

This backend provides **RESTful APIs**, **authentication**, and **real-time communication support** to handle car management, bookings, and secure data operations.

---

## 📌 Overview
The Car Rental Backend handles business logic, database operations, authentication, and API services consumed by the frontend application.

---

## 🚀 Features
- CRUD operations for cars
- Booking management system
- User & owner role management
- JWT-based authentication & authorization
- Password hashing with bcrypt
- RESTful API architecture
- MongoDB integration using Mongoose
- Secure environment-based configuration

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv

---

## 🔐 Authentication & Security
- JWT-based authentication using **jsonwebtoken**
- Protected routes for authorized users
- Password hashing using **bcrypt**
- Role-based access (owner & user)

---

## 📂 API Endpoints (Overview)
- `/api/cars` → Car CRUD operations
- `/api/bookings` → Booking management
- `/api/users` → User & owner data

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
▶️ Run Locally
npm install
npm run start

🏗️ Architecture Overview

- Express handles routing, middleware, and API structure

- MongoDB stores user, car, and booking data

- JWT secures API endpoints

- Designed to integrate seamlessly with a React frontend

🔗 Frontend Repository

Frontend application is available here:
- https://github.com/Manfarisi/carRental_FE

👨‍💻 Author

- Salman Alfarisi
- GitHub: https://github.com/Manfarisi
