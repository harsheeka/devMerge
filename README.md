# DevMerge

DevMerge is a collaborative platform designed for developers to work together, share knowledge, and build innovative solutions. It is a web application that connects developers with similar interests, offering features such as project collaboration, skill showcasing, and real-time communication.

## Features

- **User Registration & Authentication:** Secure sign-up and login with email and password.
- **Project Dashboard:** Display ongoing and past projects, their statuses, and team members.
- **Real-time Chat:** Instant messaging system for communication between team members.
- **Skill Showcase:** Developers can list their skills, expertise, and past work to connect with other professionals.
- **Matching System:** Algorithms match developers with similar interests and complementary skills.
- **API Integration:** Ability to connect and integrate with external APIs for enhanced functionality (e.g., project management tools, GitHub, etc.).

## Tech Stack

- **Frontend:** 
  - React.js
  - Redux (for state management)
  - Tailwind CSS (for UI styling)
- **Backend:** 
  - Node.js
  - Express.js
  - MongoDB (for database management)
- **Authentication:**
  - JWT (JSON Web Tokens)
- **Other:**
  - GitHub API Integration
  - WebSockets (for real-time chat functionality)

## Installation

To run the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/harsheeka/DevMerge.git
cd DevMerge
```

### 2. Install Dependencies

#### Backend (Node.js)
Go to the `backend` folder and install the necessary dependencies.

```bash
cd backend
npm install
```

#### Frontend (React.js)
Go to the `frontend` folder and install the necessary dependencies.

```bash
cd frontend
npm install
```

### 3. Environment Configuration
Set up the environment variables by creating a `.env` file in both the `frontend` and `backend` directories. Example `.env` configuration for the backend:

```
MONGO_URI=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Start the Development Server

#### Backend

In the `backend` folder, run the following:

```bash
npm start
```

#### Frontend

In the `frontend` folder, run the following:

```bash
npm start
```

The application should now be running at `http://localhost:3000` (Frontend) and `http://localhost:5000` (Backend).

## Usage

- **Sign Up/Login:** Create an account or log in to access the platform’s features.
- **Create a Project:** Start a new project and invite collaborators.
- **Browse & Join Projects:** Browse through projects and apply to join those that match your skills and interests.
- **Chat with Team:** Use the real-time chat feature to collaborate with your project team.

## Contributing

We welcome contributions to DevMerge! If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request with your changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## Contact

- **Harshika Arya** (Creator)  
  Email: harshikaarya35@gmail.com
---
