# 🐙 OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Architecture

This application follows a three-tier architecture:

### 1. **Presentation Tier (Frontend)**
- **Technology**: React 19 + Vite + TypeScript
- **Port**: 5173
- **Features**:
  - Hot Module Replacement (HMR)
  - Modern UI with Vite build optimization
  - API integration with backend

### 2. **Logic Tier (Backend)**
- **Technology**: Node.js + Express + TypeScript
- **Port**: 8000
- **Features**:
  - RESTful API endpoints
  - Request validation
  - Error handling
  - CORS support

### 3. **Data Tier (Database)**
- **Technology**: MongoDB + Mongoose
- **Port**: 27017
- **Features**:
  - User management
  - Workout tracking
  - Data persistence

## Project Structure

```
octofit-tracker/
├── frontend/               # React 19 + Vite frontend
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── backend/                # Express + TypeScript backend
    ├── src/
    │   ├── index.ts
    │   └── models/
    │       ├── User.ts
    │       └── Workout.ts
    ├── package.json
    ├── tsconfig.json
    └── .env.example
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (running on port 27017)
- npm or yarn

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

The backend API will be available at `http://localhost:8000`

### MongoDB Setup

Make sure MongoDB is running on `localhost:27017`:

```bash
# If using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## API Endpoints

### Health Check
- `GET /api/health` - Check API status
- `GET /api/version` - Get API version

## Development

### Frontend Development
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend Development
- `npm run dev` - Start Express server with hot reload
- `npm run build` - Compile TypeScript
- `npm run start` - Run compiled backend

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

## Technologies Used

- **Frontend**: React 19, Vite, TypeScript, Axios
- **Backend**: Express.js, TypeScript, Mongoose, MongoDB
- **Development**: TSX, ESLint

## Features (Planned)

- ✅ Multi-tier architecture setup
- ✅ User authentication (models)
- ✅ Workout tracking (models)
- ⏳ User registration & login
- ⏳ Workout CRUD operations
- ⏳ Workout statistics and analytics
- ⏳ Real-time updates

## License

ISC

---

**Built with ❤️ using GitHub Copilot Agent Mode**
