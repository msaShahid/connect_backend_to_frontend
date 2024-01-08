# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Connect a backend (Node.js with Express) to a frontend (React with Vite) using a proxy server.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): Comes with Node.js installation.

1. Navigate to the project directory:
cd BF_connection

2. Install backend dependencies:
cd backend
npm install

3. Install frontend dependencies:
cd frontend
npm install

Development
1. Running the Backend
In the backend directory, start the Node.js server:

cd backend
npm start

The backend server will run on http://localhost:8000.

2. Running the Frontend
In the frontend directory, start the Vite development server:

cd frontend
npm run dev

Proxy Setup
To connect the frontend and backend through a proxy server, follow these steps:
During development, the frontend server proxies API requests to the backend server to avoid CORS issues. The proxy configuration is located in the frontend/vite.config.js file.

// frontend/vite.config.js

export default {
  // ... other config options
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
};


Build and Deployment
To build the project for production, use the following commands:

cd ../frontend
npm run build





