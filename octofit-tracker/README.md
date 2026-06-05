# 🐙 OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite (Port 5173)
├── backend/           # Node.js + Express + TypeScript (Port 8000)
└── README.md
```

## Technology Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Port:** 5173

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin support
- **Port:** 8000

### Database
- **MongoDB** - NoSQL database
- **Port:** 27017

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB running locally or connection URI

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

### Build for Production

**Frontend:**
```bash
cd octofit-tracker/frontend
npm run build
npm run preview
```

**Backend:**
```bash
cd octofit-tracker/backend
npm run build
npm start
```

## API Endpoints

- `GET /` - API info
- `GET /health` - Health check

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit
NODE_ENV=development
```

## Development

### Linting

**Frontend:**
```bash
npm run lint
```

**Backend:**
```bash
npm run lint
```

## License

MIT
