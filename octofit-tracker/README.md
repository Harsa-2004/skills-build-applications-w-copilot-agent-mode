# 🐙 OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/           # Node.js + Express + TypeScript
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
└── README.md
```

## Technology Stack

### Frontend
- **React 19** - Latest React version
- **Vite** - Next generation build tool
- **TypeScript** - Type-safe development
- **Port**: 5173

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **Mongoose** - MongoDB ODM
- **Port**: 8000

### Database
- **MongoDB** - NoSQL database
- **Port**: 27017

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB running on localhost:27017
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend will be available at `http://localhost:8000`

### API Health Check

```bash
curl http://localhost:8000/api/health
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with ts-node
- `npm run build` - Compile TypeScript
- `npm run watch` - Watch for changes and compile
- `npm start` - Start compiled application

## Environment Variables

### Backend (.env)
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

## Development

This project is initialized with:
- ✅ React 19 with Vite
- ✅ Express.js server
- ✅ TypeScript support
- ✅ Mongoose for MongoDB
- ✅ CORS enabled
- ✅ Development-ready configuration

## License

ISC
