# OMNITAAS – Full Stack Engineer Assessment
## Login Application (React + Node.js)

A full-stack login application built with React (frontend) and Node.js with Express (backend).

## Features

- ✅ Login page with username and password fields
- ✅ Backend API (POST /login) that validates credentials
- ✅ Welcome page after successful login
- ✅ Error handling for invalid credentials
- ✅ Remember username functionality
- ✅ Fully responsive design with media queries
- ✅ Functional components with React Hooks
- ✅ Proper API integration with HTTP status codes
- ✅ Clean code structure and quality

## Tech Stack

### Frontend
- React 18
- React Router DOM
- CSS3 with responsive design
- Functional Components & Hooks
- Axios
- Bootstrap

### Backend
- Node.js
- Express.js
- CORS middleware

### Backend (Node.js + Express):

- Express server with CORS middleware
- POST /login endpoint with credential validation
- Proper HTTP status codes (200 for success, 401 for invalid credentials)
- Health check endpoint

#### Frontend (React):
- Functional components using React Hooks
- Login page with form validation and error handling
- Welcome page with user information display
- Remember username functionality using localStorage
- Proper routing with React Router
- API integration with error handling

## Project Structure

```
Login-Application/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Login.css
│   │   │   ├── Welcome.js
│   │   │   └── Welcome.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Usage

1. **Login Credentials**: Use `admin` as both username and password
2. **Remember Username**: Check the "Remember username" checkbox to save your username for future logins
3. **Navigation**: After successful login, you'll be redirected to the welcome page
4. **Logout**: Click the logout button on the welcome page to return to the login screen

## API Endpoints

### POST /login
Validates user credentials.

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "username": "admin"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid username or password"
}
```

### GET /health
Health check endpoint.

**Response (200):**
```json
{
  "status": "Server is running"
}
```

## Responsive Design

The application is fully responsive and works on:

- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop devices (1024px and up)
- 🖥️ Large screens (1200px and up)

Features responsive:
- Flexible layouts that adapt to screen size
- Touch-friendly buttons and inputs
- Optimized font sizes and spacing
- Landscape orientation support for tablets

## Code Quality

- ✅ Functional components with React Hooks
- ✅ Proper error handling
- ✅ Clean component structure
- ✅ Responsive CSS with media queries
- ✅ Semantic HTML5
- ✅ Accessibility considerations
- ✅ Modern ES6+ syntax

## Development

### Backend Development
- Use `npm run dev` to start with nodemon for auto-restart
- Server runs on port 5000 by default

### Frontend Development
- React Scripts handles the build process
- Hot reload enabled in development mode
- Proxy configured to backend at localhost:5000

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
