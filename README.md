# Fullstack Institute Management API

This project is a Node.js/Express backend for a multi-institute management system. It supports user authentication, dynamic institute creation, course, category, teacher, and student management, and file uploads (local and Cloudinary).

## Features

- User registration and login (JWT-based)
- Institute creation (dynamic tables per institute)
- Course, category, teacher, and student CRUD
- File uploads (local disk and Cloudinary)
- Role-based access (admin, institute, super-admin, student, teacher)
- Sequelize ORM with MySQL
- Modular route/controller structure

## Tech Stack

- Node.js, Express.js
- TypeScript
- MySQL (with Sequelize ORM)
- Cloudinary (for file uploads)
- Multer (for file handling)
- JWT (authentication)
- dotenv (environment variables)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MySQL server

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd server
   ```

2. Install dependencies:

   ```sh
   npm install
   ```
3. Set up your `.env` file (see example below).
4. Start the server:

   ```sh
   npm start
   ```

### .env Example

```
PORT=3000
DB_NAME=project2
DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=3306
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## API Endpoints

### Auth

- `POST /api/register` — Register a new user
- `POST /api/login` — Login and receive JWT

### Institute

- `POST /api/institute` — Create a new institute (protected)
- `GET /api/institute/student` — List students (protected)
- `GET /api/institute/teacher` — List teachers (protected)
- `GET /api/institute/courses` — List courses (protected)
- `GET /api/institute/category` — List categories (protected)

### Course

- `POST /api/institute/courses` — Create a course (protected, supports file upload)
- `DELETE /api/institute/courses/:id` — Delete a course

### Category

- `POST /api/institute/category` — Create a category
- `DELETE /api/institute/category/:id` — Delete a category

### Teacher

- `POST /api/institute/teacher` — Create a teacher
- `DELETE /api/institute/teacher/:id` — Delete a teacher

### Student

- `POST /api/institute/student` — Create a student
- `DELETE /api/institute/student/:id` — Delete a student

## File Uploads

- Local uploads: stored in `/src/uploads/`
- Cloudinary uploads: configure Cloudinary credentials in `.env`

## Development

- Uses `nodemon` for auto-reload
- TypeScript for type safety
- Sequelize migrations with `alter: true` for auto-sync

## License

MIT

---

**Note:** This project is for educational/demo purposes. For production, add validation, error handling, and security best practices.
