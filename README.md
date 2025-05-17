# Task Master

A full-stack task management application built with React, Node.js, Express, and MySQL. Containerized with Docker and deployed on AWS.

## Features

- User authentication (signup/login)
- Create, read, update and delete tasks
- Organize tasks into categories/projects
- Due dates and priority levels
- Dashboard with task statistics

## Tech Stack

### Frontend
- React (Hooks & Functional Components)
- React Router for navigation
- Axios for API requests
- CSS/SCSS for styling

### Backend
- Node.js
- Express.js
- JWT for authentication
- MySQL for database

### DevOps
- Docker for containerization
- Docker Compose for local development
- AWS (EC2, RDS) for deployment

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Docker and Docker Compose
- MySQL (local development)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Orniepay/Task-Manager-Application.git
cd Task-Manager-Application
```

2. Install dependencies
```
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Environment Variables
Create ```.env``` files in both the ```server``` and ```client``` directories based on the provided example files.

4. Run the application (Development)
```
# Using Docker Compose
docker-compose up

# Without Docker
# Terminal 1: Run backend
cd server
npm run dev

# Terminal 2: Run frontend
cd client
npm start
```

5. The application should now be running at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure
```
Task-Manager-Application/
├── client/                 # React frontend
│   ├── public/             # Static files
│   ├── src/                # Source files
│   │   ├── components/     # React components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── utils/          # Utility functions
│   │   └── App.js          # Main App component
├── server/                 # Node.js backend
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── server.js           # Entry point
└── docker-compose.yml      # Docker Compose configuration
```


## API Documentation
Authentication

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login existing user

## Tasks
- GET /api/tasks - Get all tasks for current user
- POST /api/tasks - Create a new task
- GET /api/tasks/:id - Get a specific task
- PUT /api/tasks/:id - Update a task
- DELETE /api/tasks/:id - Delete a task

## Categories
- GET /api/categories - Get all categories
- POST /api/categories - Create a new category
- PUT /api/categories/:id - Update a category
- DELETE /api/categories/:id - Delete a category

## Deployment
Instructions for deploying to AWS:
1. Set up an AWS EC2 instance
2. Configure RDS MySQL database
3. Set up Docker on EC2
4. Deploy containers using Docker Compose

Detailed deployment guide coming soon!

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
1. Fork the repository
2. Create your feature branch: git checkout -b feature/my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin feature/my-new-feature
5. Submit a pull request

## Acknowledgments
- React Documentation
- Express Documentation
- Docker Documentation